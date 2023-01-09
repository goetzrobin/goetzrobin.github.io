import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ContentMetaData} from "../../../lib/content-metadata-provider/ContentMetaData";

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
          <div class="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-lg p-4">
                <h4 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                 {{article.title}}</h4>
                <p class="mt-2 mb-6 text-sm text-zinc-600 dark:text-zinc-400">
                  {{article.teaser}}
                </p>
          </div>
      </a>
  `,
})
export class FeaturedBlogPreviewComponent {
  @Input()
  public article?: ContentMetaData
}
