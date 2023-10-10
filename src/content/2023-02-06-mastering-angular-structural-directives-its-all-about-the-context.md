---
title: Mastering Angular Structural Directives - It's all about the context
date: 2023-02-06
teaser: To unleash the power of structural directives one needs to understand how they interact with the rest of the application and outside world. This article examines how this is done with the context object.
slug: 2023-02-06-mastering-angular-structural-directives-its-all-about-the-context
---
In the [first article of this series,](/blog/2023-01-20-mastering-angular-structural-directives-the-basics) we learned how to render our first template to the DOM using structural directives. We saw that the asterisk micro syntax is actually optional and expanded to an `ng-template` by Angular. Then, we leveraged dependency injection to obtain references to our template and view container and used them to create new DOM elements.

So far we have only rendered static HTML to the DOM. There was no outside interaction between our template and the rest of the application. Let's change that and introduce structural directive's `context`.

Note: We will only use the `ng-template` notation in this post and dedicate the next post solely to understanding the asterisk micro syntax.

## Structural Directive's Context - Definition & Structure
We already know how to use the ViewContainerRef's `createEmbeddedView` method to render our template. This function takes a second optional parameter called `context`. The ViewContainerRef's documentation defines it as such:
_The data-binding context of the embedded view, as declared in the `<ng-template>` usage. Optional. Default is undefined._

It seems like we can use this `context` object to bind data to our template. Unfortunately, this is all the information we get directly from the ViewContainerRef documentation. We are left in the dark on how to use it or if there is a specific structure to this context object.

More about the structure is provided by the documentation of another built-in structural directive we have not mentioned yet: **NgTemplateOutlet**

This directive _inserts an embedded view from a prepared TemplateRef_ and takes in a template reference and (amongst others) an additional input: `context`. Let’s see how `context` is described in this part of the documentation:

_A context object to attach to the EmbeddedViewRef. This should be an object, the object's keys will be available for binding by the local template let declarations. Using the key $implicit in the context object will set its value as default_

We combine the information from both docs and recap:
1. We can pass a `context` object to the ViewContainerRef's `createEmbeddedView` method.
2. This object will be used to bind data to the embedded view, which is rendered based on our `ng-template`.
3. The keys of the `context` object will be available for the `ng-template` through **let declarations**.
4. There is a special key `$implicit` that is used as the default value of those let declarations.

Already, things are much clearer. But what exactly are those **let declarations**? And how can we use them to connect our `context` object to our `ng-template`?

## Let declarations - binding context to the template

Let declarations can be used on `ng-template` tags to give us access to the `context` provided by the applied structural directive.

Their structure looks like this:

let-_local_=“**export**”

- _local_ is the local variable name used in the template.
- **export** is the value exported by the directive under a given name, aka one of the keys in our context object! Unless the key is `$implicit`. This key is special and is assigned to let-_local_ by default. If =“**export**” is omitted in a let declaration, the value of `$implicit` is automatically assigned to our _local_ variable.

Let's look at an example to better understand how this data binding works:

```ts
  // We create a directive that allows us to provide
  // the template with information on how long a
  // specific unit of measurement is in meters.
  @Directive({
    selector: '[unitsInMeters]',
  })
  export class UnitsInMetersDirective {
  // The context passed to the ng-template
  // it holds information about how long a unit is in meters
  private unitsInMetersContext = {
    // the default is meter
    $implicit: 1,
    // a mile is 1609.34 meters long
    mile: 1609.34,
  };

  // To render our template to the DOM we:
  // get the template ref from the ng-template host
  private template = inject(TemplateRef);
  // get the viewcontainerref from the host: <!--comment-->
  private vcr = inject(ViewContainerRef);

  // on initialization of our directive we
  // render our template to the DOM passing
  // our unitsInMetersContext
  public ngOnInit(): void {
    this.vcr.createEmbeddedView(this.template, this.unitsInMetersContext);
  }
}

```



Awesome! We can finally bind data to our templates! For now, we only used constant values, but we are in no way limited to only that.

## Dynamic context - Unleashing the full power of structural directives
As we build more complex directives we will need to pass more than just constant values to our template. Angular does not limit the type of values of our context's keys. We can pass pretty much any type of value to our template.

Examples are:
- **Static values** such as constant numbers, strings, or other objects.
- **Dynamic values**, which are references to properties of our directive. Of course, can include `@Input()` properties.
- **Observables**, which are references to observables within our directive. I realize that those are also "just" properties of our directive, but they are really powerful and can avoid excessive re-rendering of our template.
- **Functions**, which are references to our directive's functions. It should be noted, that the `this` keyword used in those functions needs to be bound to the directive's **execution context** (a different context than the one this article is focused on). To achieve that you can either wrap the function passed in the context with an arrow function or use `.bind(this)` on the function.

Let's see the true power of `context` in practice and create a structural directive exposing information about currency exchange rates - the **exchangeRate** directive.

Our requirements are:
- The directive should allow the user to input the **from** currency and the **to** currency. These inputs are [ISO 3-Letter Currency Codes](https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/D_Currencies_and_Their_3-Letter_Codes).
- By default, we convert from USD to EUR
- We call an API to return the current rate between the currencies
- Once we get the value we render our template and expose:
  1. the **from** currency code
  2. the **to** currency code
  3. the **rate**
  4. the **reverseFn** function, which can be called to switch the **from** and **to** variables. Reversing the current **rate**

Using it in a component should be as easy as this:
```ts
@Component({
  selector: 'my-app',
  template: `
  <label>From <input [(ngModel)]="fromInput"> </label>
  <label>To <input [(ngModel)]="toInput"> </label>
  
  <ng-template exchangeRate [from]="fromInput" [to]="toInput" let-from="from" let-to="to" let-rate="rate" let-reverse="reverseFn">
  <p>Converting from {{from}} to {{to}} the exchange rate is: {{rate}}</p>
  <button (click)="reverse()">Reverse</button>
  </ng-template>
  `,
})
export class AppComponent {
  public fromInput = 'USD';
  public toInput = 'EUR';
}
```
Let's look at the overall structure of how our directive might implement this functionality:
```ts
@Directive({
  selector: '[exchangeRate]',
})
export class ExchangeRateDirective implements OnInit, OnChanges {
  // from input which defaults to USD if none is provided
  @Input('from')
  public from = 'USD';
  // to input which defaults to EUR if none is provided
  @Input('to')
  public to = 'EUR';

  // TemplateRef and ViewContainerRef to render to DOM
  private template = inject(TemplateRef);
  private vcr = inject(ViewContainerRef);
  // HttpClient to query API
  private http = inject(HttpClient);

  // initally we render our template with the default values
  public ngOnInit(): void {
    this.getExchangeRateFromApiCreateContextRenderTemplate();
  }

  // whenever an input value changes we query our
  // api for the new rate and re-render the template
  // given the new input is a 3 letter currency code
  public ngOnChanges(changes: SimpleChanges): void {
    // get the new from value or keep old
    const newFrom = changes.from ? changes.from.currentValue : this.from;
    // get the new to value or keep old
    const newTo = changes.to ? changes.to.currentValue : this.to;
    // over simplified check if inputs are currency code
    if (newFrom.length !== 3 || newTo.length !== 3) {
      // stop processing changes as definitely not a valid currency code
      return;
    }
    // get new rate and render template to DOM
    this.getExchangeRateFromApiCreateContextRenderTemplate();
  }

  private getExchangeRateFromApiCreateContextRenderTemplate(): void {
    ...
  }

  public reverseRate() {
    // this is for demonstration purposes only
    // since from and to are inputs reassigning those inputs
    // might be confusing to the consumer of the directive
    const oldFrom = this.from;
    this.from = this.to;
    this.to = oldFrom;
    this.getExchangeRateFromApiCreateContextRenderTemplate();
  }
}
```
First, we take in our **from** and **to** inputs with the defaults from the requirements. Then, we inject our dependencies which we need to render our template to the DOM and make API calls to get the newest exchange rate.
```ts
  // from input which defaults to USD if none is provided
  @Input('from')
  public from = 'USD';
  // to input which defaults to EUR if none is provided
  @Input('to')
  public to = 'EUR';

  // TemplateRef and ViewContainerRef to render to DOM
  private template = inject(TemplateRef);
  private vcr = inject(ViewContainerRef);
  // HttpClient to query API
  private http = inject(HttpClient);
```

On initialization, we get the exchange rate from the API, create the `context` and render the template.
```ts
  // initally we render our template with the default values
  public ngOnInit(): void {
    this.getExchangeRateFromApiCreateContextRenderTemplate();
  }
```

On every subsequent change, we determine if the inputs changed and if they are a currency code. If they did not, we do nothing. If they did, we again get the exchange rate from the API, create the `context` and render the template.
```ts
  // whenever an input value changes we query our
  // api for the new rate and re-render the template
  // given the new input is a 3 letter currency code
  public ngOnChanges(changes: SimpleChanges): void {
    // get the new from value or keep old
    const newFrom = changes.from ? changes.from.currentValue : this.from;
    // get the new to value or keep old
    const newTo = changes.to ? changes.to.currentValue : this.to;
    // over simplified check if inputs are currency code
    if (newFrom.length !== 3 || newTo.length !== 3) {
      // stop processing changes as definitely not a valid currency code
      return;
    }
    // get new rate and render template to DOM
    this.getExchangeRateFromApiCreateContextRenderTemplate();
  }
```

Finally, we define a reverse function that reverses the **from** and **to** variable, then gets the reversed rate from the API, creates the context, and renders the template.
```ts
  public reverseRate() {
    // this is for demonstration purposes only
    // since from and to are inputs reassigning those inputs
    // might be confusing to the consumer of the directive
    const oldFrom = this.from;
    this.from = this.to;
    this.to = oldFrom;
    this.getExchangeRateFromApiCreateContextRenderTemplate();
  }
```


Let's take a closer look at the `getExchangeRateFromApiCreateContextRenderTemplate` method and see how it ties everything together.
```ts
  private getExchangeRateFromApiCreateContextRenderTemplate(): void {
    // 1. we get the new rate based on the from and to currencies and re-render our template
    this.http
      .get(`https://open.er-api.com/v6/latest/${this.from}`)
      .pipe(
        // 2. we only care about the immediate response
        take(1),
        // 3. we extract the rate for the currency
        // we convert to
        map((response: ExchangeRateResponse) => {
          return response?.rates?.[this.to] ?? -1;
        })
      )
      .subscribe((rate) => {
        // 4. once the rate arrives, we build the
        // context which will be exposed to our template.
        const exchangeRateContext = {
          // 4.1 current value of our from property
          from: this.from,
          // 4.2 current value of our to property
          to: this.to,
          // 4.3 rate returned by api
          rate,
          // 4.4 function reference to refresh
          reverseFn: () => this.reverseRate(),
        };
        this.vcr.clear();
        // 5. we render the template with the new context
        this.vcr.createEmbeddedView(this.template, exchangeRateContext);
      });
  }
```
1. The method uses the HttpClient's _get_ method to request a new rate from the API for our **from** currency code and
   returns an observable of the response.
2. We ensure we only react to the first value emitted using the `take(1)` RxJs operator.
3. With the `map` operator, the API response inside of the observable is mapped to the rate for our *to* currency code. If we cannot find the code, we return a symbolic value of -1. This indicates to users of our directive that something is off so they can display an appropriate message. Of course, this is oversimplified, but I hope you get the idea.
4. We subscribe to our observable and obtain the rate.
   Once the rate is received, we build our `context` with the following keys:
1. **from**: the current currency code of our directives _from_ property.
2. **to**: the current currency code of our directives _to_ property
3. **rate**: the exchange rate returned from the API
4. **reverseFn**: a reference to our directives reverseRate function bound to the current execution context with an arrow function.
5. We render our template to the DOM and pass the new `context`.

Now, we can use our directive in the AppComponent as described above:

```ts
@Component({
  selector: 'my-app',
  template: `
  <label>From <input [(ngModel)]="fromInput"> </label>
  <label>To <input [(ngModel)]="toInput"> </label>
  
  <ng-template exchangeRate [from]="fromInput" [to]="toInput" let-from="from" let-to="to" let-rate="rate" let-reverse="reverseFn">
  <p>Converting from {{from}} to {{to}} the exchange rate is: {{rate}}</p>
  <button (click)="reverse()">Reverse</button>
  </ng-template>
  `,
})
export class AppComponent {
  public fromInput = 'USD';
  public toInput = 'EUR';
}
```

Awesome! We have now interacted with the rest of the app through inputs and outputs, even the world outside our application by injecting the HttpClient and making API calls to remote servers! Everything from within our structural directive.

[Check out the working directive here](https://stackblitz.com/edit/angular-ivy-phkd8x?file=src/app/app.component.ts)

## One step at a time
There are a lot of ways to improve our directive such as improving performance by avoiding re-renders using observables for our exposed variables and strict type checking for our context in the `ng-template`.

However, these are topics for another post. If you are interested in how to strictly type your context exposed to templates Thomas Laforge wrote this great [article](https://dev.to/this-is-angular/directive-type-checking-45oe) covering everything you need to know. I highly recommend you read it!

Let's be proud of ourselves today. We took another step to master structural directives in Angular by understanding the key concept of the `context`. Let's take some time to digest all this new information and get ready to learn everything about the structural directive micro syntax. The magic that brings us back our asterisk.
