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
import {ContentRenderer} from "@analogjs/content";
import {ContentMetaData} from "../content-metadata-provider/ContentMetaData";

@Directive({
  selector: '[frontMatter]',
  standalone: true,
})
export default class FrontMatterDirective
  implements OnInit, OnChanges, AfterViewChecked {
  private templateRef = inject(TemplateRef<any>)
  private viewContainer = inject(ViewContainerRef)
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);

  @Input() frontMatter!: string | null;

  frontMatterRendererService = inject(FrontMatterRendererService);
  contentRenderer = inject(ContentRenderer);

  static ngTemplateContextGuard(
    directive: FrontMatterDirective,
    context: unknown
  ): context is Omit<ContentMetaData,'slug'> & {content: SafeHtml} {
    return true;
  }

  ngOnInit() {
    this.updateContent()
  }

  ngOnChanges(): void {
    this.updateContent();
  }

  updateContent() {
    const contentResolver = this.route.snapshot.data['_analogContent'];
    const contentToRender = this.frontMatter ?? contentResolver();
    this.renderContent<Omit<ContentMetaData, 'slug'>>(contentToRender).then(content => {
      this.contentRenderer.render(content.body).then(body => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef, {
          ...content.attributes,
          date: new Date(content.attributes.date),
          content: this.sanitizer.bypassSecurityTrustHtml(body)
        });
      })
    })
  }

  async renderContent<T>(content: string): Promise<FrontMatterResult<T>> {
    return this.frontMatterRendererService.render<T>(content);
  }

  ngAfterViewChecked() {
    this.frontMatterRendererService.enhance();
  }
}
