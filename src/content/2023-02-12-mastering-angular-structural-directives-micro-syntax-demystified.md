---
title: Mastering Angular Structural Directives - Micro-syntax demystified
date: 2023-02-12
teaser: After looking under the hood of structural directives, this article reintroduces the asterisk and tries to help you understand how Angular interprets this shorthand syntax.
slug: 2023-02-12-mastering-angular-structural-directives-micro-syntax-demystified
---
In the [previous article](/blog/2023-02-06-mastering-angular-structural-directives-its-all-about-the-context) of this series, we took a closer look at the `context` object and how we can use it to expose all kinds of data and even functions to our template. Combined with `@Input()`s and dependency injection, we got a first glimpse of how powerful structural directives are once they can interact with the rest of our application or even the outside world (using Angular's `HttpClient`.)

While I quickly "introduced" the structural directive micro-syntax in the [first article](/blog/2023-01-20-mastering-angular-structural-directives-the-basics), we have applied all our custom directives directly to `ng-template`s. Now it is time to reintroduce the asterisk and take the time to understand how Angular interprets this shorthand syntax.

## One structural directive per element

Before we begin exploring the ins and outs of Angular's micro-syntax, I should note that we can only ever apply one structural directive per host element. As the official documentation states: _The reason is simplicity. Structural directives can do complex things with the host element and its descendants. When two directives lay claim to the same host element, which one should take precedence?_ 
Therefore, if we add multiple structural directives to the same element the Angular compiler will throw an error.

## Understanding the syntax reference
I spent a lot of time trying to figure out the best way to introduce Angular's micro syntax. 
Should I do it the same way I picked up structural directives. I got gradually introduced to more and more bits, pieces, and gotcha's as I used structural directives. However, I always lacked a deeper, more complete understanding of the underlying mechanisms that make them work. 
Or should I start with the official syntax reference, which is intimidating to say the least. I always found that part of the Angular documentation to be one of the most confusing. However, once I truly wrapped my head around it, it was like an epiphany and absolutely changed the way I look at and understand structural directives.

Therefore, I decided to start with that: The official syntax reference. I will do my best to break things down and explain every piece of it. Together, we will tackle it and take our Angular skills to the next level. 

We got this!

### Without further ado: the structural directive syntax reference

![*:prefix="( :expression | :let  ) (';' | ',')? ( :let | :as | :keyExp )*"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tl6jvqyrpmwzp51xqnzf.png)
When I first saw this expression in the documentation, I had no idea any of this meant. I was overwhelmed to be completely honest. But equipped with the knowledge from our previous articles, some clever coloring, and breaking this monstrosity down into smaller pieces, we will demystify this syntax and understand what is going on.

Adding colors makes the distinct parts more obvious.
![Angular Structural Directive Syntax Reference with Colors](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s33e3jsb09s9oq9p24i4.png)
Much better! I also want to flip the first :let and :expression. The reason will become clear a little later.

![Angular Structural Directive Syntax Reference with Colors and Reordered](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7eabg3rwv3bszir5vhss.png)
Awesome! This already looks a lot less intimidating. 

## Components of the structural directive syntax reference
Let's dive in and start breaking the syntax down into its sub-components.
The equal sign divides the expression into two sides:

### 1. *:prefix
![*prefix](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k19tbkerdq57si6nz7m8.png)
The asterisk **\*** and the **:prefix** make up the left side. 
The asterisk instructs Angular to encapsulate this directive in a `ng-template`. 
**:prefix** is always the directive's selector. If the directive has an input with the same name as our :prefix AND the right side starts with an **:expression**, it can also serve as the first input of our directive.
I will explain this in detail in the section below.

### 2. (:expression | :let) (';' | ',')? (:let | :as | :keyExp)*
![(:expression | :let) (';' | ',')? (:let | :as | :keyExp)*](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9a5rzduzsifgwt13voir.png)
The right side is made up of several subgroups. A logical group is denoted by a pair of blue parentheses. The blue vertical line **|** indicates a logical **OR** within a group. If the group is followed by a blue question mark **?**, it is optional. If it is followed by a blue asterisk *****, the group can be repeated multiple times. (This includes 0 times.)

Again, we can divide the right side into 3 smaller parts:
#### 1. (:expression | :let)

![(:expression | :let)](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fstwgnocrhlobn0k5llt.png)
This first part is either an **:expression** or a **:let** declaration. 

##### 1.1 :expression
![:prefix=":expression"](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gc31arn7t85j5cemcdjs.png)
If we have an input parameter with the same name as the selector in our directive, this part must always be a **:expression** or Angular will throw an error.
Any valid Angular expression is regarded an **:expression**. This includes boolean (true/false) values, function calls, and component variables.

The following example demonstrates how the micro-syntax binds the **:expression** to the **:prefix** input of the component:

```ts
@Directive({
  standalone: true,
  // our directives selector, which becomes the :prefix
  selector: '[myNgIf]',
})
export class MyNgIfDirective {
  // dependencies needed to render
  private _vcr = inject(ViewContainerRef);
  private _template = inject(TemplateRef);

  private _isRendered = false;
  @Input()
  // an input with the same name as the selector
  // binding the :expression to the :prefix (myNgIf)
  set myNgIf(expression: boolean) {
    this._isRendered = expression;
    if (this._isRendered) {
      this._vcr.createEmbeddedView(this._template);
    } else {
      this._vcr.clear();
    }
  }
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyNgIfDirective],
  template: `
  <button (click)="isRendering = !isRendering">Toggle</button>
  <p>We can now bind an Angular expression like our component variable isRendering ({{isRendering}}) to our myNgIf input.
  If isRendering is true we will see our component rendered below:

  <div *myNgIf="isRendering">Rendered.</div>
  `,
})
export class App {
  public isRendering = false;
}
```
[Link to Stackblitz.](https://stackblitz.com/edit/angular-8aqkv3?file=src/main.ts)

If no `@Input()` property matches the selector of the directive, this first part must be a **:let** declaration.

##### 1.2 :let declaration
![:let](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zj6g2f5ah7cmb44wfcpp.png)
In the previous article, we saw let declarations applied directly to the `ng-template`. We learned how they extract the variables from our `context` and make them available for use in our template.

The micro-syntax :let declarations accomplish the same thing.
Their structures are very similar and look like this:

let _local_=“**export** ';'?”

- _local_ is the local variable name used in the template.
- **export** refers to the value exported by the directive under a specific name, which is one of the keys in our `context` object! Except when the key is `$implicit`. This key is unique and is assigned to 'let local' by default. If we don't include ="**export**" in our let declaration, the value of `$implicit` is automatically assigned to our local variable.
- ';'? is an optional semi-colon that indicates the end of the let declaration.

An example of the micro-syntax :let declaration:

```ts
@Directive({
  standalone: true,
  selector: '[myLet]',
})
export class MyLetDirective implements OnInit {
  // dependencies needed to render
  private _vcr = inject(ViewContainerRef);
  private _template = inject(TemplateRef);

  public ngOnInit() {
    this._vcr.createEmbeddedView(this._template, {
      $implicit: { hello: 'World from implicit' },
      second: { hello: 'World from second' },
    });
  }
}
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyLetDirective],
  template: `
  <div *myLet="let ctx;">
  <p>{{ctx | json}}</p>
  </div>

  <div *myLet="let secondCtx = second">
  <p>{{secondCtx | json}}</p>
  </div>
  `,
})
export class App {}
```
[Link to Stackblitz.](https://stackblitz.com/edit/angular-bkq621?file=src/main.ts)

As you can see we can extract both the `$implicit` into the `ctx` template variable and the `second` key into the `secondCtx` variable using our :let declaration. Take note that we added a semi-colon at the end of the first declaration. This is not required. The second declaration without it also works.

#### 2. (; | ,)?
![(; | ,)?](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96i80xfxezyad3srmqm8.png)
We can add an optional semi-colon or comma after our initial :expression or :let declaration to separate it from the following component. This can be used to make your code more readable. It is not necessary.

Let us update our simple directive from the:let declaration example to demonstrate that we can, but are not required to, use semi-colons and commas to separate our :let declarations.

```ts
@Directive({
  standalone: true,
  selector: '[myLet]',
})
export class MyLetDirective implements OnInit {
  // dependencies needed to render
  private _vcr = inject(ViewContainerRef);
  private _template = inject(TemplateRef);

  public ngOnInit() {
    this._vcr.createEmbeddedView(this._template, {
      $implicit: { hello: 'World from implicit' },
      second: { hello: 'World from second' },
    });
  }
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyLetDirective],
  template: `
  <div *myLet="let context; let secondCtx = second">
  semi-colon
  <p>{{context | json}}</p>
  <p>{{secondCtx | json}}</p>
  </div>

  <div *myLet="let context, let secondCtx = second">
  colon
  <p>{{secondCtx | json}}</p>
  <p>{{secondCtx | json}}</p>
  </div>

  <div *myLet="let context let secondCtx = second">
  nothing
  <p>{{context | json}}</p>
  <p>{{secondCtx | json}}</p>
  </div>
  `,
})
export class App {}
```
[Link to Stackblitz.](https://stackblitz.com/edit/angular-aysump?file=src/main.ts)

To make our code clearer, we can add a semicolon or even a comma between our :let statements. If we exclude these, our code still functions as intended.

#### 3. (:let |:as | :keyExp)*
![(:let |:as | :keyExp)*](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r5hd9mdvpfb8g8rqwtma.png)
##### 3.1 :let declaration
![:let declaration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k7trtdox3uuw3ogf1x02.png)
This third section may be repeated as many times as needed following the initial :expression, :let declaration, or the optional semicolon or comma. It can either be a :let, :as, or :keyExp declaration. The :let declaration is the same as the one we used above. We move on to the :as declaration.

##### 3.2 :as declaration
![:as declaration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e0j7u52iq2o82urh06u7.png)
Similar to the :let declaration, the :as declaration extracts `context` variables and binds them to the template.
It's syntax is very similar to our :let declaration.
It looks like this:

**export** as _local_ ';'?

- **export** is the value exported by the directive under a given name, aka one of the keys in our `context` object!
- _local_ is the local variable name used in the template.
- ';'? is an optional semi-colon that indicates the end of the let declaration.

One could say, that :as is pretty much :let in reverse order. Angular actually translates both expression to the same "simple" let declaration: let-_local_="**export**" on the `ng-template`.
We can see this in action rewriting our AppComponent to use an :as declaration instead of the second :let declaration:
```ts
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MyLetDirective],
  template: `
  <div *myLet="let context; second as secondCtx">
  nothing
  <p>{{context | json}}</p>
  <p>{{secondCtx | json}}</p>
  </div>
  `,
})
export class App {}
```
[Link to Stackblitz.](https://stackblitz.com/edit/angular-jtz5sq?file=src/main.ts)

With the: as an d:let declarations, we now have two tools to extract `context` data for usage in our template. If a property of our directive has the same name as our selector, we also know how to assign a `@Input()` value to it. We frequently need to give our directive multiple inputs. See how :keyExp declarations do this.

##### 3.3 :keyExp declaration
![:keyExp declaration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uuiu08fol8gxxji3opu7.png)

It's syntax is very similar to our :let declaration.
It looks like this:

**key ":"?** <u>:expression</u> (as _local_)? ';'?

- **key ":"?** indicates an assignment to a special `@Input()` variable of our directive. 
Why special? The literal **key** value and the directive's selector, or the :prefix, are combined to form the variable's name. The **key** is appended to the end of the :prefix in camelCase. :prefix and **key** become :prefixKey, ngIf and else become ngIfElse. You can see this in the Angular [source code.](https://github.com/angular/angular/blob/a7597dd08026a4071758323d54ccbfb382e0c780/packages/common/src/directives/ng_if.ts#L190) Also, you can see that the colon to indicate an assignment (similar to assigning a value to a key in a JavaScript object) is optional. `*ngIf="loaded; else loadingTemplate"` and `*ngIf="loaded; else: loadingTemplate"` are the same thing.
- <u>:expression</u> is the Angular expression bound to your :prefixKey `@Input()`
- (as _local_)? is an optional way to directly use the <u>:expression</u>, which was passed in as an `@Input()`, in the template with the _local_ variable name.
**Very important:** For this to work, the directive's `context` object must have a camelCase-fused-key. A directive like this: `<div *calculateAvg="let avg; data: (data$ | async) as testData">...</div>` Would need to have a `calculateAvgTestData` key in its `context` object for `testData` to expose the correct value.
- ';'? is an optional semi-colon that indicates the end of the let declaration.

Let's look at the full source code of the `*calculateAvg` example from above:
```ts
@Directive({
  // directive to calculate the average
  selector: '[calculateAvg]',
  standalone: true,
})
export class CalculateAvgDirective {
  // dependencies needed to render the template
  private _vcr = inject(ViewContainerRef);
  private _template = inject(TemplateRef);

  // our average that we calculate whenever
  // new data is provided
  private _avg = 0;

  // private reference to our data so we can calculate the
  //  average in the set function
  private _data = [];
  @Input()
  // we want to be able to use the key data in our key expression
  // we know that we need to camelCase-fuse our key with the directive name
  // calculateAvg (:prefix) + data (key) => calculateAvgData (:prefixKey)
  set calculateAvgData(values: number[]) {
    // store data passed in
    this._data = values;
    const sum = this._data.reduce((a, b) => a + b, 0);
    // calculate the average
    this._avg = sum / Math.max(1, values.length);

    // render template
    this._vcr.createEmbeddedView(this._template, {
      // make avg available through $implicit
      $implicit: this._avg,
      // make data available for as expression
      calculateAvgData: this._data,
    });
  }
}
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CalculateAvgDirective],
  template: `
  <div *calculateAvg="let avg; data: (data$ | async) as testData">
  micro-syntax: {{avg}} is the average of {{testData}}
  </div>

  <ng-template 
    calculateAvg
    [calculateAvgData]="(data$ | async)"
    let-testData="calculateAvgData"
    let-avg
    >
    ng-template: {{avg}} is the average of {{testData}}
    </ng-template>

  `,
})
export class App {
  data$ = of([1, 3, 3, 1, 4, 0, 2, 2, 1, 3]);
}
```
[I highly recommend to examine working code is here.](https://stackblitz.com/edit/angular-4vwtaw?file=src/main.ts)

Don't worry if a lot of information sounds confusing or still a bit unclear. :keyExp declarations are definitely the hardest part to understand about structural directives and their micro-syntax. 

## What's next

Today, we've covered every aspect of micro-syntax. We dissected and thoroughly examined the official syntax reference. I hope this has helped you understand what Angular does when structural directives are used in your applications. However, I believe that in order to cement today's knowledge, we should look at how the syntax is used in Angular's built-in directives. In [the following article,](/blog/2023-02-12-mastering-angular-structural-directives-micro-syntax-in-the-wild) we will apply what we've learned today and dissect the NgIf and NgFor directives.

If you liked this article feel free to like and share it with others. If you enjoy my content follow me on [Twitter](https://twitter.com/goetzrobin) or [Github](https://github.com/goetzrobin).
