import { injectContent } from '@analogjs/content';
import {AsyncPipe, DatePipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import FrontMatterDirective from "../../../lib/front-matter/front-matter.directive";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'blog-post',
  standalone: true,
  imports: [AsyncPipe, FrontMatterDirective, JsonPipe, DatePipe, RouterLink],
  template: `
      <article *frontMatter="let title = title; let date = date; let content = content">
          <header class="flex flex-col">
              <h1
                      class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {{title}}
              </h1>
              <time [attr.datetime]="date | date"
                    class="order-first flex items-center text-base text-rose-500">
                  {{date | date}}</time>
          </header>
          <div class="pt-8 sm:pt-12 prose dark:prose-invert" [innerHTML]="content"></div>
      </article>
  `,
})
export default class BlogPostComponent {
}
