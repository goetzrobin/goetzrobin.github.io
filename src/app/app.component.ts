import {Component, inject, OnInit, Renderer2} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ThemeService} from "../lib/theme/theme.service";
import {DOCUMENT} from "@angular/common";
import {HeaderComponent} from "../components/layout/header/header.component";
import {FooterComponent} from "../components/layout/footer/footer.component";

@Component({
  selector: 'blog-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent],
  host: {
    class: 'text-zinc-900 dark:text-zinc-200 dark:bg-zinc-800 overflow-y-scroll flex flex-col w-full h-full'
  },
  template: `
    <app-header class="w-full mx-auto max-w-7xl" (toggleThemeClicked)="toggleDarkMode()"></app-header>
    <div class="flex-1 px-4 sm:px-8 mt-9">
      <div class="mx-auto max-w-4xl lg:px-8">
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-footer class="w-full mx-auto max-w-7xl" name="Robin Goetz"></app-footer>
  `,
})
export class AppComponent implements OnInit {
  private _themeService = inject(ThemeService);
  private _document = inject(DOCUMENT)
  private _renderer = inject(Renderer2);

  public ngOnInit(): void {
    this._themeService.init(this._renderer, this._document);

  }

  public toggleDarkMode(): void {
    this._themeService.toggleDarkMode()
  }
}
