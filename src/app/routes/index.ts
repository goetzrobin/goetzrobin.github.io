import {RouterLink, RouterOutlet} from '@angular/router';
import {Component, inject} from "@angular/core";
import {Observable, of} from "rxjs";
import {
  FeaturedBlogPreviewComponent
} from "../../components/blog/featured-blog-preview/featured-blog-preview.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ContentMetaData} from "../../lib/content-metadata-provider/ContentMetaData";
import {PageHeaderComponent} from "../../components/layout/page-header/page-header.component";
import {ContentMetadataProvider} from "../../lib/content-metadata-provider/analog-content-metadata-provider";

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FeaturedBlogPreviewComponent, AsyncPipe, NgForOf, PageHeaderComponent],
  template: `
      <app-page-header
              title="Robin Goetz"
              intro="Angular Developer. Analog Enthusiast."
      ></app-page-header>

      <h2
              class="mt-12 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Featured Posts</h2>
      <div class="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <app-featured-blog-preview [article]="article"
                                     *ngFor="let article of (blogArticles$ | async) ?? []"></app-featured-blog-preview>
      </div>
  `,
})
export default class HomeComponent {
  public blogArticles$: Observable<ContentMetaData[]> = inject(ContentMetadataProvider).injectMetadata();
}
