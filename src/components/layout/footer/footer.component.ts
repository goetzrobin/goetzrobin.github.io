import {Component, Input} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe],
  host: {
    class: 'block'
  },
  template: `
      <footer class="mt-32 p-2 sm:px-8 lg:px-16">
          <p class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40 text-sm">
              <span class="text-rose-500">©</span> {{date | date : 'YYYY'}} {{name}}. All rights reserved.
          </p>
      </footer>
  `,
})
export class FooterComponent {
  date = new Date();
  @Input()
  public name = ''
}
