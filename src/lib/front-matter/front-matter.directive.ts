import {
  AfterViewChecked,
  Directive,
  inject,
  OnChanges,
  OnInit, TemplateRef, ViewContainerRef,
} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {ContentRenderer, injectContentFiles} from "@analogjs/content";
import {ContentMetadata, ContentWithMetadata} from "../content-metadata/content-metadata";

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
  private _contentRenderer = inject(ContentRenderer);
  private _contentFiles = injectContentFiles<ContentMetadata>()


  static ngTemplateContextGuard(
    directive: FrontMatterDirective,
    context: unknown
  ): context is ContentWithMetadata {
    return true;
  }

  ngOnInit() {
    this.updateContent()
  }

  ngOnChanges(): void {
    this.updateContent();
  }

  updateContent() {
      const contentFileWithMetaData = this._contentFiles.find(file => file.attributes.slug === this._route.snapshot.params['slug']);
      if (!contentFileWithMetaData) {
        return;
      }
        this._contentRenderer.render(contentFileWithMetaData.content).then(body => {
          this._viewContainer.clear();
          const context: ContentWithMetadata = {
            metadata: {
              ...contentFileWithMetaData.attributes,
              date: new Date(contentFileWithMetaData.attributes.date),
            },
            content: this._sanitizer.bypassSecurityTrustHtml(body)
          };
          this._viewContainer.createEmbeddedView(this._templateRef, context);
        })
  }

  ngAfterViewChecked() {
    this._contentRenderer.enhance();
  }
}
