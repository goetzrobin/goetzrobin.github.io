import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ContentMetadata} from "../../../lib/content-metadata/content-metadata";
import {HlmIconComponent, provideIcons} from "../../spartan/icon";
import {lucideChevronRight} from "@ng-icons/lucide";
import {HlmButtonDirective} from "../../spartan/button";

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, HlmIconComponent, HlmButtonDirective],
  host: {
    class: 'block'
  },
  providers: [provideIcons({lucideChevronRight})],
  template: `
      <article *ngIf="article" class="md:grid md:grid-cols-4 md:items-baseline">
          <div class="md:col-span-3 group relative flex flex-col items-start">
              <h2 class="text-base font-semibold tracking-tight text-foreground">
                  <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-muted opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
                  <a [routerLink]="'/blog/' + article.slug"><span
                          class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                          class="relative z-10">{{article.title}}</span></a></h2>
              <time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground pl-3.5"
                    [attr.datetime]="article.date | date">
          <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span class="h-4 w-0.5 rounded-full bg-muted"></span>
          </span>
                  {{article.date | date}}
              </time>
              <p class="relative z-10 mt-2 text-sm text-muted-foreground">
               {{article.teaser}}
              </p>
              <div aria-hidden="true"
                   hlmBtn
                   variant="link"
                   class="relative text-rose-500 px-1 z-10 mt-4">Read article
                 <hlm-icon class="ml-2" name="lucideChevronRight" size="sm"/>
              </div>
          </div>
          <time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm"
                [attr.datetime]="article.date | date">
            {{article.date | date}}
          </time>
      </article>

  `,
})
export class BlogPreviewComponent {
  @Input()
  public article?: ContentMetadata
}
