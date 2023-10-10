---
title: SPARTAN. Type-safe Angular full-stack development powered by Analog.
date: 2023-04-28
teaser: It is time that Angular gets its own T3-stack for end-to-end typesafe applications! We explore how we can do this today with spartan and AnalogJs.
slug: 2023-04-28-spartan-type-safe-angular-full-stack-development-powered-by-analog
---
In 2023, Server-Side Rendering (SSR) is an essential part of modern web applications. In the React ecosystem NextJs has become so incredibly popular that the official React documentation now recommends to use it when creating a new project. The Vue docs point to Nuxt as the recommended way to take a Vue application "from the example to a production-ready SSR app."

So what about Angular? We all know Angular as a popular single page application framework (SPA) by Google. It's strength has always been in enterprise applications, who require developers to build and manage complex systems. But indeed Angular has had support for server side rendering (SSR) through Angular Universal for years. However, in developer surveys Angular's SSR capabilities has been the top area Angular users want to see improvements in. To put it short, SSR is currently one of the weaknesses of this amazing framework. The good news, the team is working hard to bring improvements to Universal and the core framework that will soon allow us to leverage the full power of Angular combined with modern SSR solutions. I invite you to read [this exciting article](https://blog.angular.io/whats-next-for-server-side-rendering-in-angular-2a6f27662b67) by Jessica Janiuk from the Angular team to learn more.

The even better news is that SSR with Angular today might be a lot further than you think already. @brandontroberts has created an amazing community project called Analog. A metaframework a la NextJs or Nuxt built on top of Angular, Vite, and Nitro. There will be a whole article dedicated to getting started with Analog that will go into much more detail. I also recommend to check out the official documentation at [analogjs.org](https://analogjs.org/) to learn more.

In this article, we will go a step further and augment Analog with some other tools to create a complete, incredibly powerful application stack that is typesafe from the database to the DOM rendering template. Thankfully, Angular's TypeScript support is unrivaled as the framework has been developed entirely in TypeScript since its initial release became available more than ten years ago. To maintain this high focus on typesafety throughout the entire application is only natural. With both client and server written in TypeScript, Analog puts us in an exceptional position to fully capitalize on this, especially as more and more fantastic server side capabilities become available in the Typescript ecosystem.

Once we augment these two fundamental pillars with other amazing (mostly) typesafe technologies we end up with the following stack: [Supabase](https://supabase.com/), [Prisma](https://www.prisma.io/), [Analog](https://analogjs.org/), [tRPC](https://trpc.io/), [Tailwind](https://tailwindcss.com/), [Angular](https://angular.io/), and [Nx](https://nx.dev/). Or short: SPARTAN.

Of course, all the source code is available to you and if you are already excited about this and cannot wait to get your hands dirty I invite you to check out the repository [here.](https://github.com/goetzrobin/spartan)

I will do my best to present compelling arguments for each of the underlying technologies. Continue reading to learn why I think they deserve to power your upcoming full-stack application.

## The SPARTAN Stack
Let’s get our hands dirty and see the different components that make up the SPARTAN stack:
### Nx
Let's start with the workspace. The location where your code will reside and the features that meet the needs of your users will be implemented. It reminds me of a craftsman's workshop, if you will. There is only a workbench at first, and as you move along and continue working on your projects, you gradually fill it with all the tools you need. Our beloved uncle Nx has been doing woodworking for years and arrives on the first day with a toolbox filled with every tool one could ever need. But let’s get back to software:

Nx is a next-generation build system that offers  first-class monorepo support and strong integrations for all well-known javascript frameworks. It enables you to use  frontend frameworks like Angular or backend frameworks like NestJs to architect, test, and build your project at any size.

It comes with a fantastic collection of tools that make managing monorepos much easier. A monorepo is a multi-project and multi-library version-controlled code repository. By enabling us to reuse components and types not just between multiple front-end libraries but also between the frontend and the backend, monorepos make it simple to increase the DRYness of our code. The ability to share code across the client and server in a s∂ingle repository is a game-changer for us. There are many more advantages to monorepos, and far better papers have been written about them.

To get started with Nx you can run the following command and select the following options:

```shell
npx create-nx-workspace@latest

✔ Choose your style                     · integrated
✔ What to create in the new workspace   · angular
✔ Repository name                       · spartan
✔ Application name                      · app
✔ Default stylesheet format             · css
✔ Enable distributed caching to make your CI faster · No
```

Please note that all the commands are supposed to illustrate a basic setup. There’s a lot of fine tuning necessary to get the application up and running. Cloning the GitHub repository is the fastest way to get started.

### Angular
The aforementioned command will create for you a Nx workspace that is already set up to be used with Angular. Well done! Your SPARTAN project's foundation has just been established!
Let me briefly explain why Angular is my preferred framework before we go on:

Angular has opinionated routing solutions, a strong HttpClient for making asynchronous web queries, and, my personal favorite, an outstanding dependency injection system. Angular provides programmers with all the resources they need to create outstanding applications right out of the box. It is more than simply a library; it is a full-fledged framework.

Also, Angular is written in TypeScript. Static type checking is now possible with our IDE, helping in identifying mistakes early on. When both the frontend and the backend are created using TypeScript, this is extremely powerful. This enables us to be typesafe from the database all the way through to the template that renders our data to the DOM!

When creating something from scratch, it's easy to overlook that applications on the internet are utilized by individuals of all abilities. It's possible that some users will need assistive technology to use our applications. Good accessibility (a11y) features have been baked into the Angular framework. By default, the Angular development team prioritizes accessibility. Look at the Angular Component Development Kit, for example. Its accessibility features are fantastic. It offers all the tools necessary to build your own extendable, aesthetically pleasing, and easily accessible components and is maintained by the framework's creators. Built with Angular, for everyone.

Building with Angular, also means building with everyone. The incredible community surrounding Angular is perhaps its best feature. They are an amazing group of folks from all different backgrounds. The amazing Angular core team, which cares about users, developers, and ensures that everyone has a say when they plan and build new features, is the community's spearhead (pardon the pun). Angular truly supports excellent community projects, and the community takes full advantage by providing tremendous tools and features on top of an amazing framework.

### Analog
We are off to a strong start and have a full-fledged, complete framework as the essential component of our stack. So let's add Analog to Angular and give it some superpowers. Adding Analog to your workspace is quite simple with the brand-new Nx plugin:

Install the `@analogjs/platform`:
```shell
npm i @analogjs/platform
```
And add a preconfigured Analog application:
```shell
nx g @analogjs/platform:app analog-trpc
```

Analog is a metaframework for Angular. It provides you with all the benefits of Angular, but extends its capabilities with even more:

Analog uses Vite for serving and building as well as Vitest for testing. Vite is  a next generation JavaScript  bundler that is super fast. It also gives us access to the Vite ecosystem  with hundreds of very powerful plugins. A mature frontend framework like Angular combined with access to all the benefits of Vite is truly incredible. It seems like the Angular team shares this opinion as it is also working to move the built in dev server for [Angular to Vite.](https://twitter.com/mgechev/status/1644018247748943872)

{% twitter 1644018247748943872 %}

Another incredible advantage of Analog is that it comes equipped to handle both Server-Side Rendering (SSR) and Static Site Generation (SSG) for Angular applications. With Analog, Angular can easily power marketing websites, blog pages, and more! As Analog is SSR by default, no further configuration is necessary.
Analog comes with SSG support. It makes it simple for you to export your website as basic static assets that you can host on GitHub Pages, S3, or any other static file server! Whether you choose to go fully static or leverage the benefits of server side rendering, Analog offers all of the SSR benefits for SEO and performance today. Still, there is even more. With Angular 16, we already get non-destructive hydration and significantly improved web vitals enhancements. You can expect even greater performance once zoneless applications powered by signals are released in version 17. Building on Analog puts you in a great position to take full advantage of those features.

Last but not least, Analog supports API (server) routes and file-based routing for Angular apps. In an analog application, the folder hierarchy and filenames determine the routing. You won't ever need to declare a route array again. Don't worry, you can still use the full power of the Angular router with its route guards and resolvers by defining route metadata within your files.

### TailwindCSS

Every good application needs a great UI. Although it's easier said than done, there are tools that help us do our best work. Tailwind is one of those essential tools for me.
Tailwind is "a utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90`."
These utility classes let you to modify the layout, color, spacing, font, shadows, and more to create a distinctive component design without leaving your HTML or adding any additional CSS code. To me, there are several key factors that earn Tailwind it’s place in the SPARTAN stack:

- Its set of utility classes have good design principles built in.
- Building your reusable UI components with tailwind gives you consistency and flexibility out of the box.
- Tailwind plays together perfectly with Angular. The framework is built around components which encapsulate part of the UI and can be assembled to achieve the user experience you desire.
- I would even claim that Angular makes working with tailwind especially fun: Angular’s directives are perfect to hide the often complained about ugly markup. I wrote [a whole article](https://dev.to/goetzrobin/reusable-buttons-with-angular-tailwind-ki9) about this directive and tailwind love affair.  Also, if you dare you can something like this to extract your tw classes and keep your Angular templates clean:

{% twitter 1644820404861583361 %}

**Warning**: This seems to be highly controversial so use at your own risk...

Since we are using Vite and Nx adding tailwind will also be super straightforward. We install the necessary dependencies
```shell
npm install -D tailwindcss postcss autoprefixer
```
Then, we add a tailwind config to the root of our application:

```js
const { createGlobPatternsForDependencies } = require("@nrwl/angular/tailwind");
const { join } = require("path");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html",
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {}
  }
};

```

Finally, we tell Vite to run PostCSS and create the tailwind classes by adding a postcss.config.js file to our application:

```js
const { join } = require('path');

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {}
  }
};
```

### tRPC
At this point our frontend is ready to go! However, it turns out that Analog sneakily turned us into a full stack developer. Code that we put inside the server folder is actually executed on the server 🤯 It’s that easy! Well let’s take full advantage of our API being built in the same language and the same repository. Let’s make our server client interaction super smooth and super typesafe with tRPC.

tRPC stands for TypeScript Remote Procedure Call, and is a lightweight library for remotely calling backend functions on the client side. It makes communication between the backend and frontend incredibly easy taking advantage of TypeScript inference to automatically warn you of errors on your client before you even save the change on your server file! Using tRPC will feel like using an SDK for your API's server code, giving you confidence in your endpoints.

On the server, you create a tRPC API by defining your procedures. Procedures are the composable functions used to build your backend. They're composable and can be queries, mutations, or subscriptions. Routers contain multiple procedures. Often, we use a the popular [Zod](https://github.com/colinhacks/zod) validator library to ensure the input from the client has exactly the shape that our procedure expects. Finally, we always export the type of our API's tRPC router so we can use it in our frontend code.

In the SPARTAN repository I have already implemented tRPC adapters for both the client inside our Angular application and the Nitro server, which Analog provides to us by default. This makes using tRPC and Analog super easy! If you are interested in the underlying source code feel free to check out the `@spartan/trpc` package, which is located in the `libs/trpc` folder. For more information on tRPC I recommend checking out their amazing documentation site [trpc.io](https://trpc.io)

### Prisma

Now, our front-end code is typesafe, as is our server code, and our front-end and server interaction is both very smooth and typesafe. We're just a few steps away from having complete typesafety from our database to the template generating the DOM. Prisma is the tool that will bring us there.

Prisma is a Node.js and TypeScript ORM. An ORM is an Object Relational Mapper, which is a piece of code that wraps the code required to manipulate the data, allowing you to avoid using SQL and instead interact directly with an object in the same language you're using. Hibernate is a popular ORM for Java and the Spring framework, .NET has the entity framework, and Typescript has Prisma. Prisma, however, goes beyond just a simple ORM. It has an intuitive data model, automated migrations (I can't emphasize how valuable this is), typesafety, and auto-completion!

With Prisma, you include a definition of your database schema within your code repository.
Prisma then creates a properly typed Client using this information. The Prisma client is query builder that is specific to your database schema and is aware of every one of your tables, their fields, and their relationships! With Prisma, we are literally typesafe from the database to the template.

Additionally, it creates SQL migrations automatically using the Prisma schema, monitors the execution of migrations, and offers tools for identifying and resolving conflicts and drifts between migrations and the database schema. This completely changes the game as it enables your database and all of its types to evolve alongside your application code.

We can add Prisma to our stack like this:
```shell
npm install prisma --save-dev
```

Then, we initialize the client with:

```shell
npx prisma init
```

This will create a `prisma` folder in our Nx workspace's root directory. Inside there is a file called `schema.prisma`. I added the following contents:

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model note {
  id         BigInt    @id(map: "notes_pkey") @default(autoincrement())
  created_at DateTime? @default(now()) @db.Timestamptz(6)
  note       String?
}
```

This will tell Prisma to create a JavaScript/TypeScript client, connect to a Postgres SQL database using the `DATABASE_URL` connection url with a schema that has a simple table called `note` for our example. Of course, you will adjust the schema to fit your project.

At this point our typesafe stack is ready for development. The only thing that is missing is persistent data storage, our PostgresSQL database.

### Supabase

PostgreSQL is one of the worlds most scalable databases. It is a sophisticated object-relational system applying SQL. Postgres allows you to securely store vast quantities of complex data. It enables developers to build the most sophisticated programs, carry out administrative operations, and establish integral environments. It is an open source technology trusted by millions of developers.

It turns out that every Supabase project is powered by a dedicated PostgreSQL database. Supabase is a fantastic open source Firebase replacement that is powered by the aforementioned Postgres database. It also provides a lot more features as your project expands and becomes more involved. Supabase provides solutions for common needs like as authentication, instant APIs, edge functions, real-time subscriptions, and storage, making it a robust platform on which to develop your application.

Even better, Supabase is open source at heart. You can look through the [source code.](https://github.com/supabase/supabase) You may self-host it, utilize their free plan to get started, or commit to one of their premium subscriptions to receive a fully managed production quality environment that scales with your needs.

Supabase just wrapped up their [Launch Week 7](https://supabase.com/launch-week) with a ton of incredible features. This includes an AI assistant that was added to their premium platform. It is aware of your database design and can help you when creating more complex SQL queries. I'm even more thrilled by their most recent releases of outstanding open source projects, such as the PostgreSQL package manager [database.dev.](https://database.dev) dbdev serves the same purpose for PostgreSQL that npm does for JavaScript. It gives your PostgresSQL database incredibly easy access to packages that give your DB superpowers like full-text search or one-time-only-read data access à la Snapchat.  The best thing is that dbdev can load any PostgreSQL instance that has the required fundamental extensions, independent of the Supabase platform. Again, the code is [open source.](https://github.com/supabase/dbdev) I can't wait to see where this project goes in the future, and I have no doubt that we will soon be able to utilize a lot more fantastic libraries. Like Brandon Roberts puts it:

{% twitter 1645436665677193217 %}

Let's complete this last step and finish our typesafe, fullstack SPARTAN stack:

We will set up our persistent data storage and then use Prisma to sync our database schema to the Postgres database that our project will run on. There are two ways to get up and running with Supabase:

1. Connecting directly to your managed instance on [supabase.com](https://supabase.com/)
2. Locally using [Docker](https://www.docker.com/)

#### Option 1: Connecting to supabase.com instance

This way is super easy! Simply by creating your account, you will also have set up your first project.
This means that you are ready to connect to your projects database already!

Let's connect our application to our Supabase Postgres instance:

Add a  `.env` file at the root of your Nx workspace and add the following code snippet

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-SUPABASE-REFERENCE-ID].supabase.co:5432/postgres?schema=public"

```
It's really this easy!! Prisma can now take over the DB management and make sure that our schema is migrated to our Supabase instance.

#### Option 2: Connecting to local supabase instance

Supabase also allows you to run a version of their system locally!

To get up and running you can follow [this guide](https://supabase.com/docs/guides/cli/local-development)! They do a great job explaining how to get started and there is plenty of resources to help you if you get stuck.

If you want the quick and dirty way and are on a Mac. Here is what I did to get up and running:

##### Install supabase CLI

```shell
brew install supabase/tap/supabase
```

##### Log into CLI

```shell
supabase login
```

Create your access token from [https://app.supabase.com/account/tokens](https://app.supabase.com/account/tokens) and paste it into your terminal window.

##### Create Supabase project

```shell
# if you are in the spartan directory move UP!!!
cd ..
# create your project folder
mkdir spartan-supabase

# move into the new folder
cd spartan-supabase

# start a new git repository — important, don't skip this step
git init
```

##### Start Supabase services

```shell
supabase init
```

and

```shell
supabase start
```

###### Important: Make sure Docker is running and configured correctly!

I had Docker already installed and running. However, my setup is not compatible with the config Supabase expects by
default.
I ran the following command to get it to work for now:

```shell
DOCKER_HOST=unix:///Users/[YOUR_USER_ACCOUNT_NAME]/.docker/run/docker.sock supabase start
```

For more info see [this issue on GitHub.](https://github.com/supabase/cli/issues/167)

##### Connect to local DB

The previous step can take a while as all the docker images have to be downloaded first.
However, once everything completes you will see a console output that looks like this:

```
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
        anon key: eyJh......
service_role key: eyJh......
```

Take your cyber-security hat off for a minute (we are working locally after all) and copy the connection string:

```
postgresql://postgres:postgres@localhost:54322/postgres
```

Add a `.env` file at the root of your Nx workspace and add the connection string like so:

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:postgres@localhost:54322/postgres?schema=public"
```

Perfect! You should be able to connect to your local Supabase Postgres instance now!

#### Initializing the DB

Now that we have successfully set up our DB we need to set up our database schema.
Primsa makes this super easy!!

- We can push the schema defined in our `schema.prisma` file to our DB running

```shell
yarn prisma db push
```

- Finally, we create our prisma client by running

```shell
yarn prisma generate
```

That's it! Now our DB should be all set up and ready to go!

## Bringing it all together
While the instructions should get you pretty close to running your own SPARTAN application, the easiest way to get started with the full stack is to clone/fork the repository. It has all the little tweaks needed to get things running done already. You can start making changes right away:

```shell
git clone https://github.com/goetzrobin/spartan.git
```
The files that will be most interesting to you are:
`index.page.ts` inside the analog-trpc application:
```ts
import { Component, OnInit } from '@angular/core';
import { injectTRPCClient } from '../../trpc-client';
import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { note } from '@prisma/client';
import { waitFor } from '../../wait-for';

const inputTw = 'focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-0 block w-full appearance-none rounded-lg px-3 py-2 transition-colors text-base leading-tight md:text-sm bg-black/[.05] dark:bg-zinc-50/10 focus:bg-white dark:focus:bg-dark placeholder:text-zinc-500 dark:placeholder:text-zinc-400 contrast-more:border contrast-more:border-current';
const btnTw = 'focus-visible:ring-2 focus-visible:ring-zinc-50 focus-visible:outline-0 flex items-center justify-center rounded-lg px-2 py-1.5 text-sm font-bold tracking-tight shadow-xl shadow-red-500/20 bg-[#DD0031] hover:bg-opacity-70 text-zinc-800 hover:text-primary-darker';

@Component({
  selector: 'analog-trpc-home',
  standalone: true,
  imports: [AsyncPipe, FormsModule, NgFor, DatePipe, NgIf, JsonPipe],
  host: {
    class: 'block h-full p-4'
  },
  template: `
    <div class='justify-center flex mt-20 mb-8 items-center'>
      <h1 class='font-medium italic text-6xl text-[#DD0031] font-bold'>SPARTAN</h1>
      <img class='ml-2 block w-32' alt='Spartan Logo' src='/assets/spartan.svg' />
    </div>
    <form class='py-2 flex items-center' #f='ngForm' (ngSubmit)='addPost(f)'>
      <input required autocomplete='off' class='${inputTw}' name='newTitle' [(ngModel)]='newTitle' />
      <button class='ml-2 ${btnTw}'>+
      </button>
    </form>
    <div class='mt-4'>
      <div class='mb-4 p-4 font-normal border border-zinc-500/40 rounded-md'
           *ngFor='let note of notes ?? []; trackBy: noteTrackBy'>
        <div class='flex items-center justify-between'>
          <p class='text-sm text-zinc-400'>{{note.created_at | date}}</p>
          <button class='!text-xs h-6 !bg-opacity-10 hover:!bg-opacity-50 !text-zinc-50 ${btnTw}'
                  (click)='removePost(note.id)'>x
          </button>
        </div>
        <p class='mb-4'>{{ note.note }}</p>
      </div>

      <div class='text-center rounded-xl p-20 bg-zinc-950/40' *ngIf='!loadingPosts && notes.length === 0'>
        <h3 class='text-xl font-medium'>No notes yet!</h3>
        <p class='text-zinc-400'>Add a new one and see them appear here...</p>
      </div>
    </div>
  `
})
export default class HomeComponent implements OnInit {
  private _trpc = injectTRPCClient();
  public loadingPosts = false;
  public notes: note[] = [];
  public newTitle = '';

  public ngOnInit() {
    waitFor(this._trpc.note.list.query().then(notes => this.notes = notes));
  }

  public noteTrackBy = (index: number, note: note) => {
    return note.id;
  };

  public addPost(form: NgForm) {
    if (!form.valid) {
      form.form.markAllAsTouched();
      return;
    }
    this._trpc.note.create.mutate({ title: this.newTitle }).then(() => this.fetchPosts());
    this.newTitle = '';
    form.form.reset();
  }

  public removePost(id: bigint) {
    this._trpc.note.remove.mutate({ id }).then(() => this.fetchPosts());
  }

  private fetchPosts() {
    this.loadingPosts = true;
    this._trpc.note.list.query().then(notes => {
      this.loadingPosts = false;
      this.notes = notes;
    });
  }
}
```
It shows you how to query, update and delete records in our DB using the tRPC client.

The client interacts with a trpc endpoint defined in the `[trpc].ts` file inside the `server/routes/trpc` folder of the same `analog-trpc` application:
```ts
import { appRouter } from '../../trpc/routers';
import { createContext } from '../../trpc/context';
import { createTrpcNitroHandler } from '@spartan/trpc';
// export API handler
export default createTrpcNitroHandler({
  router: appRouter,
  createContext
});
``` 
The appRouter comes from `server/trpc/routers/index.ts` and consolidates all other routers of your application. In our case that is the `notesRouter` that is in the notes file of the same folder. I suggest you should make changes to the source code of that file, e.g. remove the list procedure, and see how typescript immediately notifies you of the breaking change in the `index.page.ts`

```ts
import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const noteRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    ).mutation(({ input }) => prisma.note.create({data: {
      note: input.title
      }})),
  list: publicProcedure.query( () =>   prisma.note.findMany()
  ),
  remove: publicProcedure
  .input(z.object({
    id: z.bigint()
  })).mutation(({input}) => prisma.note.delete({
      where: {
        id: input.id
      }
    }))
});
``` 
This is it! You now have the full power of fullstack typesafety right at your finger tips! This is SPARTAN!

<img alt="Spartan yelling this is SPARTAN" src="https://media.giphy.com/media/2BG086WOP2Xfi/giphy.gif"/>

## What's next

Allowing NestJs as a backend provider is one of the most frequently requested features for Analog. Nest is a powerful framework for building efficient, scalable Node.js server-side applications. It provides an application architecture which allows us to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular, which in theory makes it a perfect fit for Analog and SPARTAN.

{% embed https://github.com/analogjs/analog/issues/317 %}

Unfortunately, tRPC and NestJs do not play well together by default, and the tRPC team does not intend to integrate the two through an official plugin [for the time being.](https://github.com/trpc/trpc/discussions/1504)

However, there is other tools out there that offer a similar type-safe experience built for REST-API's, which is where NestJs shines. Specifically, I am talking about [ts-rest,](https://ts-rest.com/) which has an official NestJs integration. I am excited to explore those other options and see how SPARTAN can be the best possible starter for your enterprise full stack Angular projects.

With signals landing in Angular 16, I also plan to make them an integral part of the SPARTAN stack. @timdeschryver has created an amazing form library called [ng-signal-forms](https://github.com/timdeschryver/ng-signal-forms) that is completely driven by signals and already provides an absolutely amazing developer experience dealing with even the more complex scenarios we need to tackle in our real world applications. My goal is to integrate it into the current application to show how signals will transform Angular development in the future.

Finally, there is an amazing repository called [Taxonomy,](https://github.com/shadcn/taxonomy) which serves as a great resource to the NextJs community showing off how a real world application can be built with version 13 of the framework. In an ideal world, the SPARTAN repository could become such a beautifully crafted resource for the Angular community. That is the ambitious goal I have for SPARTAN and if this article got you excited about what is possible, I invite you to reach out with your ideas and even consider contributing yourself!

## The future is bright
With Analog, Angular finally has it's own meta-framework that enables us to built on top of all the amazing features that Angular provides, which gives us access to an amazing Vite ecosystem, and will enable all of us to build better, faster, and more amazing full stack Angular applications.

Together with a powerful tools like TailwindCSS, tRPC, databases like Postgres, and infrastructure providers like Supabase, who are open source at heart, I couldn't be more excited for more and more people and companies to go all in on Analog (and maybe even the SPARTAN stack) in the future.

As always, do you have any further questions or suggestions for blog posts? What do you think of this project? Is this something you could see yourself working with? I am curious to hear your thoughts. Please don't hesitate to leave a comment or send me a message.

Finally, if you liked this article feel free to like and share it with others. If you enjoy my content follow me on [Twitter](https://twitter.com/goetzrobin) or [Github](https://github.com/goetzrobin).
