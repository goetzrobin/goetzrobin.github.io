import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ContentMetadata} from "../../../lib/content-metadata/content-metadata";

@Component({
  selector: 'app-featured-blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  host: {
    class: 'flex flex-1'
  },
  template: `
      <a *ngIf="article"
         class="transform hover:scale-[1.01] transition-all rounded-xl w-full bg-gradient-to-r p-1 from-[#f43f5e] to-[#e11d48] hover:from-[#e11d48] hover:to-[#9f1239]"
         [routerLink]="'/blog/' + article.slug">
          <div class="flex flex-col h-full bg-popover rounded-lg p-4">
                <h4 class="text-base font-semibold tracking-tight text-foreground">
                 {{article.title}}</h4>
                <p class="mt-2 mb-6 text-sm text-muted-foreground">
                  {{article.teaser}}
                </p>
          </div>
      </a>
  `,
})
export class FeaturedBlogPreviewComponent {
  @Input()
  public article?: ContentMetadata
}
