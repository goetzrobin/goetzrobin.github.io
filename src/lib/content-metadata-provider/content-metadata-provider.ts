import {Observable, of} from "rxjs";
import fm from 'front-matter'
import {ContentMetaData} from "./ContentMetaData";

const CONTENT_FOLDER_FILES = import.meta.glob(['/src/content/**/*.md'], {
  as: 'raw',
  eager: true,
});


export function injectContentsMetaData(): Observable<ContentMetaData[]> {
  return of(Object.entries(CONTENT_FOLDER_FILES).map(
    ([key, fileContent]) => {
      const attributes =  fm<ContentMetaData>(fileContent).attributes;
      return {
        slug: key.replace('/src/content/','')
          .replace(/^\/(.*?)\/routes|\/app\/routes|\.(js|ts|md)$/g, ''),
        title: attributes.title,
        date: new Date(attributes.date),
        teaser: attributes.teaser ?? '',
        featured: attributes.featured ?? false
      }
    }
  ));
}
