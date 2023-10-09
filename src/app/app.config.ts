import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { withEnabledBlockingInitialNavigation, withInMemoryScrolling, withNavigationErrorHandler } from '@angular/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideClientHydration(),
    provideContent(
      withMarkdownRenderer()
    ),
    provideFileRouter(
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
      withEnabledBlockingInitialNavigation()
    ),
  ],
};
