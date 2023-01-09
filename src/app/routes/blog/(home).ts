import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {BlogPreviewComponent} from "../../../components/blog/blog-preview/blog-preview.component";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {injectContentsMetaData} from "../../../lib/content-metadata-provider/content-metadata-provider";
import {PageHeaderComponent} from "../../../components/layout/page-header/page-header.component";
import {ContentMetaData} from "../../../lib/content-metadata-provider/ContentMetaData";

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
      <app-blog-preview [article]="article" *ngFor="let article of (blogArticles$ | async) ?? []"></app-blog-preview>
    </div>
  `,
})
export default class BlogComponent {
  public blogArticles$: Observable<ContentMetaData[]> = injectContentsMetaData();
}
