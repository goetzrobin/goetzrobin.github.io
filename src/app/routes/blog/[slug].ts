import {
  ContentRenderer,
  injectContent,
  MarkdownComponent,
} from '@analogjs/content';
import { RouteMeta } from '@analogjs/router';
import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  Location,
  NgFor,
  NgIf,
  ViewportScroller,
} from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

import {
  postMetaResolver,
  postTitleResolver,
} from '../../../lib/resolvers/resolvers';
import { ContentMetadata } from 'src/lib/content-metadata/content-metadata';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AiService } from 'src/lib/ai/ai.service';

export const routeMeta: RouteMeta = {
  title: postTitleResolver,
  meta: postMetaResolver,
};

@Component({
  standalone: true,
  imports: [
    MarkdownComponent,
    AsyncPipe,
    NgIf,
    NgFor,
    JsonPipe,
    RouterLink,
    DatePipe,
  ],
  host: {
    class:
      'max-w-screen-md relative py-6 lg:gap-10 lg:py-8',
  },
  template: `
    <div *ngIf="post$ | async as post">
      <h1
        class="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {{ post.attributes.title }}
      </h1>
      <time
        [attr.datetime]="post.attributes.date | date"
        class="order-first flex items-center text-base text-rose-500"
      >
        {{ post.attributes.date | date }}</time
      >
      <analog-markdown
        class="pt-8 !max-w-screen-lg sm:pt-12 prose dark:prose-invert"
        [content]="post.content"
      />
    </div>
  `,
})
export default class BlogPostComponent {
  protected readonly post$ = injectContent<ContentMetadata>();
}
