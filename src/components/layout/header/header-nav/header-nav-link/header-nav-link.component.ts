import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header-nav-link',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a
      class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm transition-colors delay-150 opacity-80 hover:opacity-100 hover:delay-[0ms]"
      [routerLink]="href"><span class="relative z-10">{{title}}</span></a>
  `,
})
export class HeaderNavLinkComponent {
  @Input()
  public title = '';
  @Input()
  public href = ''
}
