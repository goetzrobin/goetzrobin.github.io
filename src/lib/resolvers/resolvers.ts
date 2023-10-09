import { injectContentFiles } from '@analogjs/content';
import { MetaTag } from '@analogjs/router';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ContentMetadata } from '../content-metadata/content-metadata';

// temporary
function injectActiveContentMetadata(
  route: ActivatedRouteSnapshot
): ContentMetadata {
  const file = injectContentFiles<ContentMetadata>().find((contentFile) => {
    return (
      contentFile.filename === `/src/content/${route.params['slug']}.md` ||
      contentFile.slug === route.params['slug']
    );
  });

  return file!.attributes;
}

export const postTitleResolver: ResolveFn<string> = (route) =>
  injectActiveContentMetadata(route).title;

export const postMetaResolver: ResolveFn<MetaTag[]> = (route) => {
  const ContentMetadata = injectActiveContentMetadata(route);

  return [
    {
      name: 'description',
      content: ContentMetadata.teaser,
    },
    {
      name: 'author',
      content: 'Analog Team',
    },
    {
      property: 'og:title',
      content: ContentMetadata.title,
    },
    {
      property: 'og:description',
      content: ContentMetadata.teaser,
    },
  ];
};
