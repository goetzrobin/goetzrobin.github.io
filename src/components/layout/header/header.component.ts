import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderNavLinkComponent } from './header-nav/header-nav-link/header-nav-link.component';
import { BehaviorSubject } from 'rxjs';
import { AiService } from '../../../lib/ai/ai.service';
import {HlmButtonDirective} from "../../spartan/button";
import {HlmIconComponent, provideIcons} from "../../spartan/icon";
import {lucideSun, lucideMenu, lucideCornerDownLeft} from "@ng-icons/lucide";
import {HlmInputDirective} from "../../spartan/input";
import {AiComponent} from "../../ai/ai.component";

const twMobileNavLinkClasses = `text-md transition-colors delay-150 hover:delay-[0ms] text-muted-foreground hover:text-foreground`;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderNavComponent,
    HeaderNavLinkComponent,
    FormsModule,
    AsyncPipe,
    HlmButtonDirective,
    HlmIconComponent,
    HlmInputDirective,
    AiComponent
  ],
  providers: [provideIcons({lucideSun, lucideMenu})],
  template: `
      <div class="px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
          <app-header-nav/>

          <div class="flex items-center gap-6">
              <app-ai/>
              <button
                      (click)="toggleMobileNav()"
                      hlmBtn
                      class="lg:hidden"
                      variant="ghost"
                      aria-label="Toggle site navigation"
                      type="button"
                      [attr.aria-expanded]="showMobileNav$ | async"
              >
                  <hlm-icon name="lucideMenu" size="sm"/>
              </button>
              <button
                class="hidden lg:inline-flex"
                      variant="ghost"
                      hlmBtn
                      type="button"
                      (click)="toggleThemeClicked.emit()"
              >
                  <hlm-icon name="lucideSun" size="sm"/>
              </button>
          </div>
      </div>

      <div *ngIf="showMobileNav$ | async">
          <div
                  (click)="closeMobileNav()"
                  class="fixed inset-0 z-30 backdrop-blur"
                  aria-hidden="true"
          ></div>
          <div
                  class="absolute border border-border inset-x-0 top-0 z-40 bg-popover text-popover-foreground origin-top rounded-b-2xl px-6 pb-8 pt-24 shadow-2xl shadow-background/20"
                  tabindex="-1"
          >
              <div class="flex flex-col space-y-4">
                  <a class="${twMobileNavLinkClasses}" routerLink="/">Home</a>
                  <a class="${twMobileNavLinkClasses}" routerLink="/blog">Blog</a>
                  <button
                          variant="outline"
                          hlmBtn
                          (click)="toggleThemeClicked.emit()"
                  >
                      <hlm-icon name="lucideSun" size="sm"/>
                  </button>
              </div>
          </div>
      </div>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  private _showMobileNav$ = new BehaviorSubject(false);
  public showMobileNav$ = this._showMobileNav$.asObservable();
  @Output()
  public toggleThemeClicked = new EventEmitter<void>();

  public toggleMobileNav(): void {
    this._showMobileNav$.next(!this._showMobileNav$.getValue());
  }
  public closeMobileNav(): void {
    this._showMobileNav$.next(false);
  }
}
