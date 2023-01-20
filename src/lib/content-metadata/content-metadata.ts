import {SafeHtml} from "@angular/platform-browser";

export type RawContentMetadata = {
  title: string;
  date: string;
  teaser: string;
  slug: string;
}

export type ContentMetadata = Omit<RawContentMetadata, 'date'> & { date: Date }

export type ContentWithMetadata = {
  metadata: ContentMetadata;
  content: SafeHtml;
};
