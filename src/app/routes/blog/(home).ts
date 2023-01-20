import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {BlogPreviewComponent} from "../../../components/blog/blog-preview/blog-preview.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../../components/layout/page-header/page-header.component";
import {injectContentFiles} from "@analogjs/content";
import {ContentMetadata} from "../../../lib/content-metadata/content-metadata";

@Component({
  selector: 'blog',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BlogPreviewComponent, AsyncPipe, NgForOf, PageHeaderComponent],
  template: `
    <app-page-header
      title="Blog"
      intro="I am writing online about web development. I started in 2023, and mostly write about Angular."
    ></app-page-header>
    <div class="mt-12 flex max-w-3xl flex-col space-y-16">
      <app-blog-preview [article]="article.attributes" *ngFor="let article of blogArticles"></app-blog-preview>
    </div>
  `,
})
export default class BlogComponent {
  public blogArticles = injectContentFiles<ContentMetadata>()
}
