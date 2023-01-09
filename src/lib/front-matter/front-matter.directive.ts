import {
  AfterViewChecked,
  Directive,
  inject,
  Input,
  OnChanges,
  OnInit, TemplateRef, ViewContainerRef,
} from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ActivatedRoute, Data} from "@angular/router";
import FrontMatterRendererService from "./front-matter-renderer.service";
import {FrontMatterResult} from 'front-matter';
import {ContentRenderer, injectContent} from "@analogjs/content";
import {ContentMetaData} from "../content-metadata-provider/ContentMetaData";
import {take, takeUntil} from "rxjs";
import {ContentMetadataProvider} from "../content-metadata-provider/analog-content-metadata-provider";

@Directive({
  selector: '[frontMatter]',
  standalone: true,
})
export default class FrontMatterDirective
  implements OnInit, OnChanges, AfterViewChecked {
  private _templateRef = inject(TemplateRef<any>)
  private _viewContainer = inject(ViewContainerRef)
  private _sanitizer = inject(DomSanitizer);
  private _route = inject(ActivatedRoute);
  private _frontMatterRendererService = inject(FrontMatterRendererService);
  private _contentRenderer = inject(ContentRenderer);
  private _content$ = injectContent();


  static ngTemplateContextGuard(
    directive: FrontMatterDirective,
    context: unknown
  ): context is Omit<ContentMetaData, 'slug'> & { content: SafeHtml } {
    return true;
  }

  ngOnInit() {
    this.updateContent()
  }

  ngOnChanges(): void {
    this.updateContent();
  }

  updateContent() {
    this._content$.pipe(take(1)).subscribe(content => {
      const contentResolver = this._route.snapshot.data['_analogContent'];
      const contentToRender = content ?? contentResolver();
      this.renderWithFrontMatter<Omit<ContentMetaData, 'slug'>>(contentToRender).then(content => {
        this._contentRenderer.render(content.body).then(body => {
          this._viewContainer.clear();
          this._viewContainer.createEmbeddedView(this._templateRef, {
            ...content.attributes,
            date: new Date(content.attributes.date),
            content: this._sanitizer.bypassSecurityTrustHtml(body)
          });
        })
      })
    })
  }

  async renderWithFrontMatter<T>(content: string): Promise<FrontMatterResult<T>> {
    return this._frontMatterRendererService.render<T>(content);
  }

  ngAfterViewChecked() {
    this._frontMatterRendererService.enhance();
  }
}
