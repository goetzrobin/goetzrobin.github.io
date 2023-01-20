---
title: Mastering Angular Structural Directives - The basics
date: 2023-01-20
teaser: Structural directives are one of the Angular’s most powerful tools. Their inner workings are often a mystery. This article will delve deeper into how structural directives really work.
slug: 2023-01-20-mastering-angular-structural-directives-the-basics
---

Structural directives in Angular are one of the framework’s most powerful tools. We encounter them early in our Angular journeys. They are integral to developing even the most basic Angular applications.

Whether it is rendering a list of todos or toggling some icon once a todo is completed, *ngFor and *ngIf become familiar faces in the earliest days as Angular developers. From then on, they stay our trusted partners on which we frequently rely in day-to-day development tasks. However, the inner workings of these directives are often a mystery to both new and experienced developers.

In this series, we will delve deeper into the internal workings of structural directives, providing a comprehensive understanding of what is going on under the asterisk. In this article, we will examine what needs to happen for a structural directive to render to the DOM.

## *easyToSpot - A minimal introduction to structural directive’s micro-syntax
You probably spotted two of the built-in structural directives: NgIf and NgFor. They were easy to identify, as I followed the convention laid out directly in the Angular docs: _When structural directives are applied they generally are prefixed by an asterisk, *._ More interestingly, the docs also state that Angular uses this convention to wrap the element the directive is applied to, also known as the host element, with an `ng-template`:

```ts
<div *ngIf="hero">{{hero.name}}</div>
```
becomes
```ts
<ng-template [ngIf]="hero">
  <div>{{hero.name}}</div>
</ng-template>
```
Looking at this longhand version, we can identify two ways of defining structural directives:
1. By **what they do** (as the official documentation does): _Structural directives are directives that change the DOM layout by adding and removing DOM elements._
2. By **what they are**: Directives that are applied to `ng-template`s and come with an optional micro syntax that makes our HTML nicer to read.

## Directive superpowers - Rendering to the DOM with the help of dependency injection

Knowing that we are dealing with a directive we can take full advantage of Angular's dependency injection (DI). This allows us to access the directive's host by simply injecting it into our directive. Given that we know the host's type. The following example demonstrates this:
```ts
@Component({
  // in our app
  selector: 'app',
  // ourDirective is applied to the host component
  template: `<host ourDirective ></host>`,
})
export class AppComponent {}

@Component({
  selector: 'host',
  // the host simply renders the currentName
  template: `{{ currentName }}`,
})
export class HostComponent {
  // by default the currentName is setByTheHost
  currentName = 'setByTheHost';
}

@Directive({
  selector: '[ourDirective]',
})
export class OurDirective implements OnInit {
  // ourDirective uses DI to get access to the HostComponent
  public hostComponent = inject(HostComponent);

  public ngOnInit(): void {
    // after 3 seconds OurDirective sets the hostComponent's currentName as changedByDirective
    setTimeout(() => {
      this.hostComponent.currentName = 'changedByDirective';
    }, 3000);
  }
}
```
If you want to see the code in action you can check out this [Stackblitz.](https://stackblitz.com/edit/angular-ivy-n5jbb9?file=src/app/app.component.ts)

### Injecting the template
From earlier, we know that structural directives are always applied to `ng-template`s. Therefore, we can inject Angular's TemplateRef, which provides us with the necessary information to render the template to the DOM. Let's look at the code below to see the internal workings of the TemplateRef:
```ts
@Component({
  selector: 'my-app',
  template: `<ng-template [ourDirective]>I am in the template</ng-template>`,
})
export class AppComponent {}

@Directive({
  selector: '[ourDirective]',
})
export class OurDirective implements OnInit {
  private template = inject(TemplateRef);

  public ngOnInit(): void {
    console.log(
      (this.template as any)._declarationTContainer.tViews.template + ''
    );
  }
}
```
This will log the TemplateRef's instructions, which tell Angular how to generate our DOM element to the console:
```
function AppComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
i0.ɵɵtext(0, "I am in the template");
} }
```
[Link to Stackblitz](https://stackblitz.com/edit/angular-ivy-brjapu?file=src/app/app.component.ts)

Now that we have the information on how to render our template, we need somewhere to render it. Again, Angular's dependency injection system gives us access to what we need. The **ViewContainerRef**.

### Injecting the view container
Every Angular component or directive has access to something called the ViewContainerRef. The official documentation defines it as _a container where one or more views can be attached to a component._

We can think of it as a reference to a virtual container around an anchor element. The anchor element indicates the place in the DOM where we can dynamically create new elements. The container can instantiate new elements dynamically. It will render those new elements as siblings of the anchor element.

Our anchor element can be a custom element, an element node, or even a comment element. Let's take a look at the example below:
```ts
@Component({
  selector: 'my-app',
  template: `
  <our-component></our-component>
  <div ourDirective>On div</div>
  <ng-template ourDirective>On ng-template</ng-template>
  `,
})
export class AppComponent {}

@Directive({
  selector: '[ourDirective]',
})
export class OurDirective {
  private vcr = inject(ViewContainerRef);

  public ngOnInit(): void {
    console.log(this.vcr.element.nativeElement);
  }
}

@Component({
  selector: 'our-component',
  template: `<div>Our Component</div>`,
})
export class OurComponent {
  private vcr = inject(ViewContainerRef);

  public ngOnInit(): void {
    console.log(this.vcr.element.nativeElement);
  }
}
```
This produces the following results in the Stackblitz and Chrome consoles:
![screenshot from Stackblitz, showing the custom HTMLElement, HTMLDivElement, Comment logged by our directive](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8drjm2q3q8zdccav3bv3.png)
We see that our ViewContainerRef's native elements are our custom element, a regular HTML `div` element, and in the case of the `ng-template`, a `<!--container-->` comment that Angular inserts into the HTML for any (potential) view it manages. Each time we get the DOM anchor which the ViewContainerRef can use to create new (sibling) elements.

Again, I encourage you to check out the working code in the [Stackblitz.](https://stackblitz.com/edit/angular-ivy-krvagm?file=src/app/app.component.ts)

### Putting the two together
Finally, we have everything we need to live up to the official definition of structural directives:

_Change the DOM layout by adding and removing DOM elements._

Let's create a custom structural directive that renders our template to the DOM not once, but **TWO** times! Super exciting!
```ts
@Directive({
  selector: '[twoTimes]',
})
export class TwoTimesDirective implements OnInit {
  // get the template ref from the ng-template host
  private template = inject(TemplateRef);
  // get the viewcontainerref from the host: <!--comment-->
  private vcr = inject(ViewContainerRef);

  // on initialization of our directive, render our template to the DOM twice
  public ngOnInit(): void {
    this.vcr.createEmbeddedView(this.template);
    this.vcr.createEmbeddedView(this.template);
  }
}
```
We inject both TemplateRef and ViewContainerRef into our directive. In our `ngOnInit` lifecycle hook, we create two sibling elements based on the template obtained from the directive's host.
```ts
@Component({
  selector: 'my-app',
  template: `
  <p *twoTimes>Two times from asterisk</p>
  <ng-template twoTimes><p>Two times from ng-template</p></ng-template>
  `,
})
export class AppComponent {}
```

To illustrate that our micro-syntax is correctly transpiled we use both alternatives in our AppComponent. The result is a total of four elements rendered to the DOM. Each component created two siblings to the `<!--comment-->` from the respective ViewContainerRef:
```html

<my-app ng-version="15.0.2">
    <p>Two times from asterisk</p>
    <p>Two times from asterisk</p>
    <!--container-->

    <p>Two times from ng-template</p>
    <p>Two times from ng-template</p>
    <!--container-->
</my-app>
```
[Link to Stackblitz](https://stackblitz.com/edit/angular-ivy-ezyipj?file=src/app/app.component.ts)

## Just getting started
In this article, we took the first steps to truly understanding how structural directives work. However, we have just scratched the surface. We barely even peeked under the asterisk. To be able to truly leverage the power of structural components we will need to understand how we can pass data to our template using a **context** object, how we can ensure **strict template type checking** for said context, and how the **structural directive syntax** is parsed.

So let's pat ourselves on the back, take a quick [NSDR (Non Sleep Deep Rest)](https://www.youtube.com/watch?v=AKGrmY8OSHM) break to let the information settle, and get excited about the next part of our journey to structural directive mastery. 
