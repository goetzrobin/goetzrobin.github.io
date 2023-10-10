---
title: Dark mode with Analog & Tailwind
date: 2023-02-17
teaser: Let's build an AnalogJs application with TailwindCSS and add dark mode!
slug: 2023-02-17-dark-mode-with-analog-tailwind
---

I entirely rebuilt my personal website with Analog and Tailwind a few weeks ago. I tweeted about it and received lot of positive feedback.

One of the questions I received was about how I implemented the dark mode experience. Specifically, how does the website recognize the user's preferred color scheme while also allowing her to manually adjust the theme and remember her selection for the next time you visit the page?

I decided to publish a brief post outlining the approach I used so that others may implement a comparable user experience. In this post, we will build the following dark mode mechanism:
- We identify the color scheme picked by the user and change our theme accordingly.
- A button will allow the user to change the current theme and toggle between dark and light mode.
- The current theme should be saved (I'll do this with localStorage), so that the right theme is used the next time the user accesses the page.

#### Note
Analog, Vite, and Tailwind are used in this tutorial. When building dark mode for standard Angular projects that use Webpack, the same concepts apply. Tailwind makes enabling dark mode a breeze. Again, the same functionality may be implemented with normal CSS or style processors such as SCSS.

## What is AnalogJS

[Analog](https://analogjs.org) is a full-stack meta-framework for building applications and websites with Angular. It is similar to other meta-frameworks such as Next.JS, Nuxt, or SvelteKit but built on top of Angular. It's features include:
- Vite/Vitest/Playwright
- File-based routing
- Support for API/server routes
- Hybrid SSR/SSG support
- Supports Angular CLI/Nx workspaces

and more.

## Getting started with Analog

The easiest way to get started is to use the [Open Stackblitz](https://stackblitz.com/github/analogjs/analog/tree/main/packages/create-analog/template-angular-v15?file=vite.config.ts&preset=node) button on the [analogjs.org](https://analogjs.org) website.

If you want to develop locally you can use the following command:
```sh
npm create analog@latest
```
This will scaffold a basic Analog application. Once all dependencies are installed you can start your development server with:

```sh
npm run start
```
Now that we have a vanilla Analog project up and running we can start implementing the dark mode functionality.

## Adding Tailwind to Analog

The great news is that Analog & Vite support PostCSS out of the box. So we can mostly just follow Tailwind's [Using PostCSS](https://tailwindcss.com/docs/installation/using-postcss) installation guide.

Fist we install our dependencies
```sh
npm install -D tailwindcss postcss autoprefixer
```
Then in our root directory we create two files:
#### 1. postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```
This file tells Vite to enable PostCSS and run the tailwindcss and autoprefixer plugins.

#### 2. tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
```
This file ensures that all Tailwind classes in the source folder are picked up.
Two small changes to this file compared to the Tailwind guide:
1. For the `content` property we change the file ending to `ts`.
2. We add the `darkMode` property and set its value to `class`.
   These changes ensure that our Angular files are picked up and allow us to manually toggle Tailwind's dark mode classes by adding or removing the dark class from the `html` element.

#### 3. Add default styles to styles.css
Finally, we need to add the Tailwind directives to our main css file.
```css
/*
  Allow percentage-based heights in the application
*/
html,
body {
  height: 100%;
}
/*
  Remove built-in form typography styles
*/
input,
button,
textarea,
select {
  font: inherit;
}
/*
  Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
  Create a root stacking context
*/
app-root {
  isolation: isolate;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
```
As you noticed, I also added some other awesome css resets inspired by a great Jon Comeau [blog post.](https://www.joshwcomeau.com/css/custom-css-reset/)

## Adding initialization script to index.html
After setting up Tailwind, we can move on to the initial stage of incorporating dark mode onto our page.

In order to get started, we first add a `<script>` element to our index.html file. This blocking script makes sure that the appropriate theme value is saved in localStorage and that the `dark` class is immediately applied to the `<html>` element as soon as the user loads the page.

All this occurs before our Angular application takes control and, more importantly, before any content is painted. This allows the browser to immediately apply the appropriate dark Tailwind classes when painting our user interface.

For more information, check out [this part](https://www.joshwcomeau.com/react/dark-mode/#a-workable-solution-5) of another outstanding Jon Comeau blog post that describes this technique in detail.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>MyApp</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="/src/favicon.ico" />
    <link rel="stylesheet" href="/src/styles.css" />
    <script>
      if (
        // check if user had saved dark as their 
        // theme when accessing page before
        localStorage.theme === 'dark' ||
        // or user's requesting dark color 
        // scheme through operating system
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        // then if we have access to the document and the element
        // we add the dark class to the html element and
        // store the dark value in the localStorage
        if (document && document.documentElement) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      } else {
        // else if we have access to the document and the element
        // we remove the dark class to the html element and 
        // store the value light in the localStorage
        if (document && document.documentElement) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
    </script>
  </head>
  <body>
    <app-root></app-root>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```
Let's take a closer look at what is happening inside our script tag:
```js
if (
        // check if user had saved dark as their 
        // theme when accessing page before
        localStorage.theme === 'dark' ||
        // or user's requesting dark color 
        // scheme through operating system
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        // then if we have access to the document and the element
        // we add the dark class to the html element and
        // store the dark value in the localStorage
        if (document && document.documentElement) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      } else {
        // else if we have access to the document and the element
        // we remove the dark class to the html element and 
        // store the value light in the localStorage
        if (document && document.documentElement) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }
```
- We check if there is already a `dark` value set to the `theme` property of the user's localStorage OR if the user is requesting a dark theme using the operating system.
- If that is the case and we have access to the document and its `html` element, we **add** the `dark` class to that element and store the `dark` value for our `theme` in the localStorage.
- If that is NOT the case we and we have access to the document and its `html` element, we **remove** the `dark` class from that element and store the `light` value for our `theme` in the localStorage.

Check out the source code for this file [here.](https://stackblitz.com/edit/github-ojlugz?file=index.html)

At this point we have a page that supports Tailwind and initially renders the correct color scheme.

## Creating the ThemeService
Let's move on and allow our visitors to manually toggle their preferred theme.
To do this we will create a singleton Angular service that will do 5 things:
1. It will sync with localStorage when the application first loads.
2. It will keep track of theme changes in memory.
3. It will exposes a method to toggle the theme and write those theme changes back to localStorage.
4. It will add/remove the `dark` class from the `html` element as necessary.
5. It will expose the current theme as an Observable for other parts of the application.

Let's create a new Angular service in the following location: `/src/libs/theme/theme.service.ts`. We add the following code:
```ts
@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  // A. Setting up our dependencies
  // A.1 since we will access localStorage with AnalogJS
  // (which can be used for server side rendering)
  // we will use the PLATFORM_ID to see if we are executing in the browser and
  // it is available
  private _platformId = inject(PLATFORM_ID);
  // A.2 we use Angular's renderer to add/remove the dark class from the html element
  private _renderer = inject(RendererFactory2).createRenderer(null, null);
  // A.3 we use Angular's DOCUMENT injection token to avoid directly accessing the document object
  private _document = inject(DOCUMENT);

  // B. Initializing our in memory theme store
  // B.1 we want to give every subscriber the current value of our theme
  // even if they subscribe after the first value was emitted
  private _theme$ = new ReplaySubject<'light' | 'dark'>(1);
  // B.2 we expose the current theme so our app can access it and e.g. show
  // a different icon for the button to toggle it
  public theme$ = this._theme$.asObservable();
  // B.3 this emits when the service is destroyed and used to clean up subscriptions
  private _destroyed$ = new Subject<void>();

  // C. Sync and listen to theme changes on service creation
  constructor() {
    // we check the current value in the localStorage to see what theme was set
    // by the code in the index.html file and load that into our _theme$ replaysubject
    this.syncThemeFromLocalStorage();
    // we also immediately subscribe to our theme$ variable and add/remove
    // the dark class from the html element
    this.toggleClassOnThemeChanges();
  }

  // C.1 sync with the theme set in the localStorage by our index.html script tag
  private syncThemeFromLocalStorage(): void {
    // if we are in the browser we know we have access to localstorage
    if (isPlatformBrowser(this._platformId)) {
      // we load the appropriate value from the localStorage into our _theme$ replaysubject
      this._theme$.next(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
      );
    }
  }
  // C.2 Subscribe to theme changes until the service is destroyed
  // and add/remove class from html element
  private toggleClassOnThemeChanges(): void {
    // until our service is destroyed we subscribe to all changes in the theme$ variable
    this.theme$.pipe(takeUntil(this._destroyed$)).subscribe((theme) => {
      // if it is dark we add the dark class to the html element
      if (theme === 'dark') {
        this._renderer.addClass(this._document.documentElement, 'dark');
      } else {
        // else if is added already, we remove it
        if (this._document.documentElement.className.includes('dark')) {
          this._renderer.removeClass(this._document.documentElement, 'dark');
        }
      }
    });
  }

  // D. Expose a public function that allows us to change the theme from anywhere in our application
  public toggleDarkMode(): void {
    const newTheme =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this._theme$.next(newTheme);
  }

  // E. Clean up our subscriptions when the service gets destroyed
  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
```
Let's break down what is happening here:

**A.** First we set up our dependencies
**A.1** We will need to access localStorage. Analog can be used for server side rendering. Therefore, we are not guaranteed that our code will only be run in the browser. Therefore, we inject the PLATFORM_ID so we can check if we are executing in the browser and localStorage is available.
**A.2** We inject Angular's RendererFactory and pass in null as the arguments when executing the `createRenderer` function. This will give us the default renderer. We will use this renderer to add/remove the `dark` class from our document's `html` element.
**A.3** We get access to the document using Angular's `DOCUMENT` injection token. Again, Analog can be used with Server Side Rendering. Therefore, we must avoid directly accessing the browser's document object.

**B.** We continue with initializing our in memory theme store
**B.1** We use a ReplaySubject with buffer size 1 to share the theme value (which can be `light` or `dark`.) The ReplaySubject ensures that the last value is provided to any subscriber even if they subscribe after the latest value was emitted.
**B.2** Outside our service we expose the current theme as a simple Observable.
**B.3** Finally, we set up a `_destroyed$` Subject, which we use to unsubscribe from all our Observables when our service is destroyed.

Now that everything is set up let's see what happens when the service is created.

**C.** When the service is constructed we sync our theme from the localStorage. Then, we subscribe to our `theme$` changes and add/remove the `dark` class from our `html` element accordingly.
**C.1** The appropriate theme has already been saved in the localStorage by the `<script>` in our `index.html` file has already stored the correct theme in the localStorage. We just pull that value from localStorage. To achieve that, we first determine whether we are in the browser and hence have access to localStorage. If we are, we load the stored value into our `_theme$` ReplaySubject.
**C.2** Still in the constructor we subscribe to `theme$` changes until our service is `_destroyed$`. If the theme is `dark` we add the `dark` class to the `_document`'s `html` element using Angular's `_renderer`. If the theme is `light` and the `dark` class already exists on the `html` element, then we simply remove it.

**D.** Then we expose a public function, which toggles our theme based on the current value in the localStorage. The new theme is subsequently pushed as the next value into of `_theme$` ReplaySubject. This ensures that our `_theme$` and localStorage are always in sync.

**E.** Lastly, we configure the mechanism to terminate our subscriptions  when our service gets destroyed. Our service is a singleton provided in root. It would only be destroyed if the entire application was. Therefore, we should be fine even if we don't unsubscribe here, but it's always a good idea to clean up your subscriptions.

The live code for our service can be found [here.](https://stackblitz.com/edit/github-ojlugz?file=src/libs/theme/theme.service.ts)

**Important Note:** All import paths must be the same for Angular to construct a singleton service. Therefore, we can not import our ThemeService using relative paths. We add the following to [vite.config.js](https://stackblitz.com/edit/github-ojlugz?file=vite.config.ts) in order to support Vite's use of absolute import paths:
```js
export default defineConfig(({ mode }) => ({
...
  resolve: {
    ...
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
...
}));
```
As a result, we are able to import everything from the src directory. For instance, in our (home).ts route, we will now import the service with
`import { ThemeService } from 'src/libs/theme/theme.service';`
rather than
`import { ThemeService } from '../../libs/theme/theme.service';`. This is because using relative paths can cause Angular to create multiple service instances, which can have very strange and unexpected effects.

_Yes, I spent way too much time trying to figure out why my ThemeService was showing different themes in different components..._

## Using our ThemeService in our Analog app

Now that our service is set up, let's use it in our Analog application. We will add a button to the header that allows us to toggle the theme from anywhere in the app. We also display the theme in our HomeComponent to illustrate that the current theme can be accessed from anywhere in our application. We also add Tailwind classes that support both light and dark theme styling.

### Adding a button to the AppComponent
Let's add the following to our `/src/app/app.component.ts`:
```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet],
  host: {
    class:
      'block h-full bg-zinc-50 text-zinc-900 dark:text-zinc-50 dark:bg-zinc-900',
  },
  template: ` 
  <header class="p-4">
  <button (click)="toggleTheme()">Toggle theme</button>
  </header>
  <router-outlet></router-outlet> `,
})
export class AppComponent {
  private _themeService = inject(ThemeService);

  public toggleTheme(): void {
    this._themeService.toggleDarkMode();
  }
}
```
The code for the component is [here.](https://stackblitz.com/edit/github-ojlugz?file=src/app/app.component.ts)

This will be the entry point to our Analog application.

The user can toggle the theme by clicking a button that is displayed in the template's header.

To make our application look super sleek, we also added Tailwind classes to the host. These include classes that start with the prefix `dark`, which are used when the `dark` class is added to the site's `html` element. The following classes instruct Tailwind to use a super-light zinc-gray background and a super-dark zinc-gray text-color by default and to invert them when `dark` is present:

```bg-zinc-50 text-zinc-900 dark:text-zinc-50 dark:bg-zinc-900```

Inside the component we hooked up its `toggleTheme` method with the ThemeService's `toggleDarkMode` method. The service is simply injected to the component using Angular's `inject` function.

### Displaying the current theme on Analog's (home)page
Finally, let's display the current theme on our homepage.

Using the Angular Router as a foundation, Analog offers filesystem-based routing. It provides us with a simple method for organizing our application's folders and filenames to create our route tree. To find out more about the supported types of routes, I strongly recommend checking out Analog's [routing documentation.](https://analogjs.org/docs/features/routing/overview)

We will keep it simple for our purposes and simply create an index route by creating the following component at `/src/app/routes/(home).ts`:
```ts
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  host: {
    class: 'block'
  },
  template: `
  <div class="flex p-12 gap-8 items-center justify-center">
  <img class="h-20 w-20" src="/analog.svg"/>
  <div class='w-[1px] h-14 dark:bg-zinc-50 bg-zinc-900'></div>
  <img class="h-20 w-20" src="/tailwind.svg"/>
  </div>
  <h2 class="text-2xl text-center">Analog + Tailwind: Darkmode</h2>
  <p class="mt-2 text-center">Current theme: {{theme$ | async}}</p>
  `,
})
export default class HomeComponent {
  private _themeService = inject(ThemeService);
  public theme$ = this._themeService.theme$;
}
```
The code for the HomeComponent is [here.](https://stackblitz.com/edit/github-ojlugz?file=src/app/routes/(home).ts)

Again, we add some Tailwind magic, including some `dark` classes. Additionally, we inject our ThemeService into the component and expose it's `theme$` observable, which we simply display in our template using Angular's `AsyncPipe`.

Since we set up our application to import our service via `import { ThemeService } from 'src/libs/theme/theme.service';` instead of a relative path, we will see that our `theme$` value will correctly display `light` if we are using our `light` theme and `dark` if we decide to toggle to our `dark` theme.

[Check out the complete example here!](https://stackblitz.com/edit/github-ojlugz)

## Wrapping Up

Awesome! We have now implemented dark mode in our Analog app. Our implementation respects the user's preferred color scheme by default. It avoids flashing of the wrong theme, and allows us to access and toggle the theme from anywhere in our application!

Do you have any further questions or suggestions for blog posts? Have you tried Analog before? Do you know what meta-frameworks are and how we can benefit from them? I want to hear your ideas. Please don't hesitate to leave a comment or send me a message.

Finally, if you liked this article feel free to like and share it with others. If you enjoy my content follow me on [Twitter](https://twitter.com/goetzrobin) or [Github](https://github.com/goetzrobin).
