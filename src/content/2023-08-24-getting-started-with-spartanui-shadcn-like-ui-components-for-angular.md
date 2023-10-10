---
title: Getting Started with spartan/ui - Shadcn-like UI Components for Angular
date: 2023-08-24
teaser: Shadcn & RadixUI are taking the react ecosystem by storm. Let's bring the same experience to Angular with spartan/ui.
slug: 2023-08-24-getting-started-with-spartanui-shadcn-like-ui-components-for-angular
---

We're all familiar with this: We are starting a new project and are looking for some beautiful UI components. While we could technically build these from scratch, we want to start building instead of reinventing the wheel. We need a solution to hit the ground running without sacrificing quality or accessibility (a11y).

So we venture into the world of Angular component libraries.
While they all provide incredible variety and most of them come with solid accessibility features, it seems that most Angular UI libraries come with a strong corporate branding that often doesn't quite align with the project's needs. More importantly, they mostly lack an easy way to customize or extend components and do not allow us to let them make them our own.

Then we look at the React ecosystem and all the incredible projects built on [RadixUI](https://www.radix-ui.com/) and [shadcn.](https://ui.shadcn.com/) I don't know about you, but when I do that I always get a little jealous.

## shadcn - A game-changing UI library (for React)

Why? [shadcn/ui](https://ui.shadcn.com/) comes with all the components you could ever need for a project, and all of them come in beautiful styles by default. However, it still allows you to adjust and customize every single UI primitive as you please.

How does it do that?

1. It builds on **RadixUI**, a UI library that is completely **un-styled** by default, and comes with an intuitive and extensible API, as well as great.
2. It is styled using **TailwindCSS** classes and **CSS variables** that give you the perfect amount of flexibility while pushing you towards using solid design principles.
3. Instead of making you install the styles through a npm package, it allows you to copy its beautifully crafted primitives directly into your code base, which means you **own the code** and can adjust everything to fit your needs.

The problem with shadcn for Angular developer's is that it is built on top of React...

Now imagine an accessible, open-source Angular UI library that doesn't come pre-styled, allowing you to have full creative control over its appearance. Angular' shadcn implementation so to say.

## spartan/ui - shadcn for Angular

Enter [spartan/ui](https://spartan.ng) – an innovative collection of Angular UI primitives that are un-styled and accessible by default.

### brain & helm - The building blocks of spartan/ui

To achieve our goal of a shadcn-like development experience, spartan/ui comes in two parts:

1. Through **spartan/ui/brain**, our goal is to make this process more straightforward and efficient. We offer a versatile collection of **un-styled** UI building blocks that can be easily tailored to match your project's distinct visual and functional preferences.
2. With **spartan/ui/helm**, we provide pre-designed styles built on **TailwindCSS** and **CSS variables**. Just like with shadcn, you can copy them into your project so you retain full control over their code, appearance, and overall experience.

### @spartan-ng/nx - one command to rule them all

To make this as easy as possible, **spartan/ui** comes equipped with an Nx plugin that allows you to effortlessly integrate our components into your Nx workspace. With a single command, you can add any of its 30 spartan/ui primitives to your projects.

But that's not all – the Nx plugin's capabilities extend beyond just adding components. You can also leverage it to incorporate one of 12 custom themes into your Nx applications, letting you truly own the visual appearance of your projects.

## Your first spartan app

So let's see what getting up and running with **spartan/ui** looks like.

**If you would rather follow along to a video version of this article, check it out on [YouTube.](https://www.youtube.com/watch?v=lfmR6U-P8t4&ab_channel=RobinGoetz)**

### Setting up an Nx' Angular workspace

As mentioned above, **spartan/ui** follows the same paradigm as **shadcn**, that you should own the code that allows you to style, extend, and compose your UI components.

While we are working on a standalone API, Nx provides incredible tooling for exactly this use case. Therefore, the initial version of **spartan/ui**'s CLI is an Nx plugin.

Hence, for this tutorial, we will create a new Angular project inside an Nx workspace.

#### Running create-nx-workspace

Again, Nx makes this incredibly easy. Simply run the command below.

```sh
npx create-nx-workspace@latest
```

When prompted:
1. Choose a meaningful name, I chose
2. Select Angular as your stack.
3. Opt for a standalone project.
4. **Important:** Pick CSS for your styles.
5. Add an (optional) end-to-end test runner of your choice.
6. Select standalone components.
7. Only add routing if you want to.

Finally, wait for Nx to work its magic, install all necessary dependencies, and set up your Angular workspace.

#### Removing boilerplate

I am a big proponent of having your template and styles in the same file as your Component class. Therefore, I deleted the `src/app/app.component.html` and `src/app/app.component.css` files created by the workspace generator. I also got rid of the `src/app/nx-welcome.component.ts` and changed the contents of my `src/app/app.component.ts` to the following:

```ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-root',
  template: `<button>Hello from {{title}}</button>`
})
export class AppComponent {
  title = 'sparta';
}
```

One more thing before we are ready to start adding **spartan/ui.**

#### Adding TailwindCSS

As **spartan/ui** is built on top of TailwindCSS, we need a working setup of it for our project.

Thankfully, Nx again makes this incredibly easy for us. Simply run the following command and select your application when prompted:

```sh
npx nx g @nx/angular:setup-tailwind
```

This will create a `tailwind.config.ts` file and install all the necessary dependencies. Let's continue.

### Installing @spartan-ng/nx

We are now ready to add **spartan/ui** to our project. To make our lives much easier, we will use the Nx plugin, which we install like so:

```sh
npm i @spartan-ng/nx
```

### Installing @spartan-ng/ui-core

Then we add the `@spartan-ng/ui-core` library.

```sh
npm i @spartan-ng/ui-core
```
It contains a bunch of helpers, like the `hlm` function, which powers our tailwind class merging, and most importantly the `@spartan-ng/ui-core/hlm-tailwind-preset`, which contains all the necessary extensions to tailwind, which make our **spartan/ui/helm** directives and components work.

### Setting up tailwind.config.js

We now have to add this spartan-specific configuration to your TailwindCSS setup. Simply add `@spartan-ng/ui-core/hlm-tailwind-preset` to the presets array of your config file:

```ts
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Adding CSS variables

To complete your TailwindCSS setup, we need to add our spartan-specific CSS variables to your style entry point. This is most likely a `styles.css` in the `src` folder of your application.

Again, we are using Nx, so our plugin will take care of the heavy lifting:

```sh
npx nx g @spartan-ng/nx:ui-theme
```
When prompted:
1. Select the only application in the project
2. Choose a theme you want to try
3. Select a border-radius you like
4. Leave the path empty (the plugin should be smart enough to figure out the correct one for most setups)
5. Leave the prefix empty as we add a default theme

Then, check out your `styles.css` and see the following **spartan/ui**-specific variables being added:

```css
:root {
--font-sans: ''
}

:root {
--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
}

.dark {
--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
}
```

### Adding our first primitive

Awesome! We are now all set up to use **spartan/ui** in our project. Let's leverage our Nx plugin one more time and add the button primitive to our project:

```sh
npx nx g @spartan-ng/nx:ui button
```

When prompted:
1. Select an appropriate directory to put your components, e.g. libs/spartan
2. Choose the default false, when prompted if you want to skip installing the necessary dependencies

Once the plugin finishes, you will see that a new buildable library was added in your `libs/spartan/button-helm` folder.

It contains the source code of the `HlmButtonDirective`, which comes with a bunch of different styles that are applied through a `HostBinding` based on the different inputs of the directive.

```ts
import { Directive, HostBinding, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { hlm } from '@spartan-ng/ui-core';
import { ClassValue } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: '[hlmBtn]',
  standalone: true,
})
export class HlmButtonDirective {
  private _variant: ButtonVariants['variant'] = 'default';
  @Input()
  get variant(): ButtonVariants['variant'] {
    return this._variant;
  }

  set variant(value: ButtonVariants['variant']) {
    this._variant = value;
    this._class = this.generateClasses();
  }

  private _size: ButtonVariants['size'] = 'default';
  @Input()
  get size(): ButtonVariants['size'] {
    return this._size;
  }

  set size(value: ButtonVariants['size']) {
    this._size = value;
    this._class = this.generateClasses();
  }

  private _inputs: ClassValue = '';

  @Input()
  set class(inputs: ClassValue) {
    this._inputs = inputs;
    this._class = this.generateClasses();
  }

  @HostBinding('class')
  private _class = this.generateClasses();

  private generateClasses() {
    return hlm(buttonVariants({ variant: this._variant, size: this._size }), this._inputs);
  }
}
```

_**Note**: Currently the plugin adds dependencies correctly, but their peer dependencies are not installed by Nx
Simply run `npm i` after the `@spartan-ng/nx:ui` call to make sure everything is installed correctly._

### Using our first primitive

To use our new directive we simply add the directive to our `button` in our `src/app/app.component/ts`:

```ts
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/button-helm';

@Component({
  standalone: true,
  imports: [HlmButtonDirective],
  selector: 'app-root',
  template: `<button hlmBtn variant="outline">Hello from {{title}}</button>`
})
export class AppComponent {
  title = 'sparta';
}
```

Then we start our development server with:

```sh
npm start
```
and see our beautifully styled **spartan/ui** button:


![Spartan Button in dark gray with rounded corners and white text saying Hello from sparta](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylbypwya9nq2rqb1p24o.png)

To change the appearance to another variant we simply add a `variant` input to our `<button hlmBtn>`:

```ts
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/button-helm';

@Component({
  standalone: true,
  imports: [HlmButtonDirective],
  selector: 'app-root',
  template: `<button hlmBtn variant="outline">Hello from {{title}}</button>`
})
export class AppComponent {
  title = 'sparta';
}
```

Our styles will be updated accordingly and we see our outlined button:


![Spartan Button in light gray with rounded corners and dark text and dark border saying Hello from sparta](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yna58he36f0fvziamb36.png)

## Other available components

With the release of the initial alpha version, there are 30 components available:

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Button
- Card
- Collapsible
- Combobox
- Command
- Context Menu
- Dialog
- Dropdown Menu
- Input
- Icon
- Label
- Menubar
- Popover
- Progress
- Radio Group
- Scroll Area
- Separator
- Sheet
- Skeleton
- Switch
- Tabs
- Textarea (covered by hlmInput directive)
- Toggle
- Typography

You can add new components the same way as we did for the `button.` I also plan to create more blog posts and videos, which show how to use **spartan/ui** to build your user interface.

## What's next?

**spartan/ui** is still in alpha, so there is a long way (a marathon some history nerds might suggest) ahead of us. However, I am super excited that this project is finally getting off the ground and you get to try it out and provide me with incredibly valuable feedback. I hope spartan/ui becomes the shadcn of the Angular ecosystem and together with incredible projects like [AnalogJs](https://analogjs.org/) can bring a similar innovation explosion to all of us.

As always, do you have any further questions or suggestions for blog posts? What do you think of spartan? Could you see yourself adding it to your project? I am curious to hear your thoughts. Please don't hesitate to leave a comment or send me a message.

Finally, if you liked this article feel free to like and share it with others. If you enjoy my content follow me on [Twitter](https://twitter.com/goetzrobin) or [Github](https://github.com/goetzrobin).
