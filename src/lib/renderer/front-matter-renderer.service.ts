import {inject, Injectable, PLATFORM_ID} from "@angular/core";
import fm from 'front-matter'
import {ContentRenderer} from '@analogjs/content'
@Injectable({
  providedIn: 'root'
})
export default class FrontMatterRendererService {
  platformId = inject(PLATFORM_ID);

  async render<T>(content: string) {
    return fm<T>(content);
  }

  // eslint-disable-next-line
  enhance() {
  }
}
