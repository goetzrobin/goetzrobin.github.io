import 'zone.js/node';
import {enableProdMode} from '@angular/core';
import {renderApplication} from '@angular/platform-server';
import {provideFileRouter} from '@analogjs/router';
import {provideContent, withMarkdownRenderer} from '@analogjs/content';
import {withEnabledBlockingInitialNavigation} from '@angular/router';

import {AppComponent} from './app/app.component';

if (import.meta.env.PROD) {
  enableProdMode();
}

export default async function render(url: string, document: string) {
  return await renderApplication(AppComponent, {
    appId: 'app-root',
    document,
    url,
    providers: [
      provideFileRouter(withEnabledBlockingInitialNavigation()),
      provideContent(withMarkdownRenderer()),
    ],
  });
}
