---
title: Mastering Angular Structural Directives - Micro-syntax in the wild
date: 2023-02-13
teaser: To reinforce our knowledge about structural directives from previous posts, this article will look closely at Angular's built-in NgIf and NgFor directives.
slug: 2023-02-13-mastering-angular-structural-directives-micro-syntax-in-the-wild
---

We covered every aspect of micro-syntax in the [previous article](/blog/2023-02-12-mastering-angular-structural-directives-micro-syntax-demystified). We gained a much better understanding of what Angular does when we use structural directives by examining the various parts of the official syntax reference. To reinforce this knowledge, this article will look closely at Angular's built-in NgIf and NgFor directives.

## *ngIf - Micro-syntax to ng-template
Let's start with a very common use case that most of you have probably seen in some form or another.
- In our template, we want to show some asynchronous data that we are fetching from an API.
- We want to show a loading indicator while we wait for the data.

Following best practices, we do not manually subscribe in our component, but instead move that logic into the template. Allowing Angular's AsyncPipe to handle the heavy lifting.

We will write something like this:
![*ngIf](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h7fprn9uph36uvbq8nch.png)
Let's go through the same process of identifying the various parts of this statement and looking at how Angular will translate them.

We apply the same color code:
![*ngIf color coded](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mbetjttqo1szgum8o8zm.png)
We have the asterisk **\*** and the `ngIf` selector on the left side.
Then there's the right side. It is composed of three parts:
1. an <u>:expression</u>
2. an **:as** declaration
3. a **:keyExp** declaration

Let's take a closer look at each one:
![items](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5dp0rkohitxlac36gwp1.png)
Because the right side begins with an expression, we know that this expression will be assigned to a '@Input()' with the same name as the selector (ngIf).
When Angular translates our micro-syntax, it becomes:
```
<ng-template [ngIf]="(items$ | async)">...
```
Let's continue.
![as items](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1z6fq14hutjx8bhoyez8.png)
Next, we see that we export our expression into a _local_ variable for use in our template. While this is not explicitly stated in the documentation, it is entirely possible. The mechanism enabling this is similar to the a :keyExp declaration mechanism.
To make 'items' hold the correct value, we must add the `ngIf` key to our `context` with the value of our `@Input() ngIf`. The reason for this becomes clear when we translate our micro-syntax into the `ng-template` version:
```
<ng-template
[ngIf]="(items$ | async)"
let-items="ngIf"
>...
```
For an:as declaration, Angular uses the name of the `@Input()` variable as the :export or `context`' key assigned to the _local_ variable that can be used in the template. Because the `@Input()` in our case is `ngIf`, `ngIf` must be a key in the `context`, and before rendering our template, we must assign our `@Input ngIf` to our `context`' `ngIf` key.

![else](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4y6d0nwm3fh4u66gnquv.png)
Finally, we have a regular :keyExp declaration that assigns the `loading` TemplateRef to a `@Input()` of the NgIf directive. We use our camelCase-fusing logic to determine that our input must be named `ngIfElse`.
When we translate this part of our micro-syntax into the `ng-template` version, we get:
```
<ng-template
...
[ngIfElse]="loading"
>...
```
Putting it all together we end up with the following:
![micro-syntax to ng-template](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xb18m3ablfgl0fgg0lb1.png)

This allows us to infer a lot of information about how the NgIf directive. Let's make some predictions about the source code and see if they hold up.

We know that the NgIf directive has:
1. an `@Input()` called ngIf
2. a context object with an `ngIf` key
3. another `@Input()` called ngIfElse

Let's check out the official [NgIf source code](https://github.com/angular/angular/blob/main/packages/common/src/directives/ng_if.ts) and see if we are correct:
```ts
  /**
   * The Boolean expression to evaluate as the condition for showing a template.
   */
  @Input()
  set ngIf(condition: T) {
    this._context.$implicit = this._context.ngIf = condition;
    this._updateView();
  }

  private _updateView() {
    if (this._context.$implicit) {
          ...
          this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef , this._context);
    } else {
          ...
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
    }
  }
```
We see the `@Input() ngIf`. Whenever the condition passed is set, the NgIf `context`'s `implicit` and `ngIf` keys are assigned our condition. Then the view is updated. When the condition passed in is truthy, the our template is rendered, else we render the `_elseTemplateRef`.
```ts
  /**
   * A template to show if the condition expression evaluates to false.
   */
  @Input()
  set ngIfElse(templateRef: TemplateRef<NgIfContext<T>>|null) {
    assertTemplate('ngIfElse', templateRef);
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;  // clear previous view if any.
    this._updateView();
  }
```
This template comes from our `@Input ngIfElse`, which makes sure it is a valid template and assigns it to our `_elseTemplateRef`.

```ts
/**
 * @publicApi
 */
export class NgIfContext<T = unknown> {
  public $implicit: T = null!;
  public ngIf: T = null!;
}
```
Finally, we can confirm that our context indeed has an `ngIf` key, next to the `$implicit`. Both are assigned to our truthy expression passed in through the `@Input() ngIf`. That's why we can extract our async items$ using a :let declaration using the micro syntax:
```
*ngIf="(items$ | async); let items; else: template"
```
Or using a let-declaration using the `ng-template` and our `$implicit` key:
```
<ng-template
  [ngIf]="(items$ | async)"
  let-items>
  {{items | json}}
</ng-template>
```
We will get the exact same results! 

To see examples of everything [check out this Stackblitz!](https://stackblitz.com/edit/angular-1kpdvn?file=src/main.ts)

## *ngFor - Micro-syntax to ng-template, reloaded.
Let's move on to the NgFor directive. We assume another familiar scenario similar to the one for NgIf.
- We want to display a list of some asynchronous data that we are fetching from an API in our template.
- Once we receive the list, we want to display every item of the list using a custom template. 

Our code will look like this: 
![*ngFor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t0j9sr66lk28aiu096gi.png)
Again, we color, divide, and conquer:
![*ngFor color coded](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e1g69zrfdg1ol8dbtvup.png)
The asterisk **\*** and the `ngFor` selector make up the left side.
The right side is made up out of 3 parts: 
1. an **:let** declaration
2. a **:keyExp** declaration
3. an **:as** declaration

Let's take a closer look at each one:
![let item](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tbo6pgksdroyysxm3x5c.png)

![of items](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wv6pkj5kuzfrpph90hw7.png)
While the colon is frequently left out for a cleaner reading of the NgFor micro-syntax, this is actually a classic :keyExp. We assign our `(items$ | async)` expression to our directive's camelCase-fused `@Input() ngForOf`. This input value is also assigned to the `context`' `ngForOf` key, allowing us to use an :as expression to access it. We can then use our local `items` variable in the template directly.
When translated to the `ng-template` version, this section becomes:
```
<ng-template
  [ngForOf]="(items$ | async)"
  let-items="ngForOf"
>...
```
![as index](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nm0fdcduh91y375499d6.png)
Last but not least, we have a simple :as declaration extracting the `index` key of our `context` into the `i` variable:
```
<ng-template
  let-i="index"
>...
```
Putting everything together we end up with this:
![micro-syntax to ng-template](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aog4uvpmofm7ahltqhsf.png)

Again, we can use the info above to make some predictions about the source code and see if they hold up.

We know that the NgFor directive has:
1. an `@Input()` called `ngForOf` taking in an iterable, for which each item one template gets rendered
2. a context object with an `$implicit` key making the current to-be-rendered item accessible. 
3. a context object with an `ngForOf` key to expose the value above
4. a context object with an `index` key making the current to-be-rendered index accessible. 

Let's check out the official [NgIf source code](https://github.com/angular/angular/blob/main/packages/common/src/directives/ng_for_of.ts) and see if we are correct:

```ts
  @Input()
  set ngForOf(ngForOf: U&NgIterable<T>|undefined|null) {
    this._ngForOf = ngForOf;
    this._ngForOfDirty = true;
  }
```
Again, we see in the source code the `@Input() ngForOf` taking in our iterable. In addition, a flag is used to indicate that this variable is dirty. This is done because NgFor does not simply render and re-render every item in our iterable every time. It actually performs some advanced calculations to determine whether a template needs to be re-rendered in order to ensure that the NgFor directive performs well even with larger lists and more complex templates.

If you want to learn more about NgFor, I recommend you look at its source code. We'll proceed to look at the `context` object.
```ts
/**
 * @publicApi
 */
export class NgForOfContext<T, U extends NgIterable<T> = NgIterable<T>> {
  constructor(public $implicit: T, public ngForOf: U, public index: number, public count: number) {}

  get first(): boolean {
    return this.index === 0;
  }

  get last(): boolean {
    return this.index === this.count - 1;
  }

  get even(): boolean {
    return this.index % 2 === 0;
  }

  get odd(): boolean {
    return !this.even;
  }
}
```
Again, we find our `$implicit`, `ngForOf`, and `index` keys. You can also see that there is a bunch of other keys available for you to access in your template!
If you are interested in seeing NgFor and it's `context` in action. [Check out this StackBlitz!](https://stackblitz.com/edit/angular-nw65s4?file=src/main.ts)

## What's next?

I can't tell you how proud I am of you if you've made it this far! I hope you now have a clearer understanding of how Angular works its magic on structural directive micro-syntax. Undoubtedly, this subject is among the most challenging aspects of the Angular framework. I hoped that by breaking things down into smaller, more manageable chunks, I would be able to provide you with the knowledge and tools you need to both better comprehend the built-in structural directives and make your own custom structural directives.

Let us pause for a moment (or two, or three) to digest all of this new information and celebrate that the asterisk has returned.

We will improve our custom "*exchangeRate" directive in the following (and possibly final?) article of this series so that it can work with the micro-syntax with ease. Additionally, instead of re-rendering the template after each successful API call, we will expose the response as an observable to our template.

Do you have any further queries or subjects you'd like me to discuss? Do you believe a video on structural directives would be beneficial? I'm interested in hearing your ideas. If you have any suggestions for future posts, please do leave a comment or send me a message.

Finally, if you liked this article feel free to like and share it with others. If you enjoy my content follow me on [Twitter](https://twitter.com/goetzrobin) or [Github](https://github.com/goetzrobin).
