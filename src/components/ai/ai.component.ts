import {Component, inject, Sanitizer} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HlmButtonDirective} from "../spartan/button";
import {HlmIconComponent, provideIcons} from "../spartan/icon";
import {HlmInputDirective} from "../spartan/input";
import {AiService} from "../../lib/ai/ai.service";
import {BrnDialogModule} from "@spartan-ng/ui-dialog-brain";
import {
  HlmDialogDescriptionDirective,
  HlmDialogHeaderComponent,
  HlmDialogModule,
  HlmDialogTitleDirective
} from "../spartan/dialog";
import {lucideBot, lucideCornerDownLeft, lucideLoader, lucideX} from "@ng-icons/lucide";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {map, switchMap, tap} from "rxjs";
import {ContentRenderer} from "@analogjs/content";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [
    FormsModule,
    HlmButtonDirective,
    HlmIconComponent,
    HlmInputDirective,
    BrnDialogModule,
    HlmDialogModule,
    HlmDialogHeaderComponent,
    HlmDialogTitleDirective,
    AsyncPipe,
    JsonPipe,
    HlmDialogDescriptionDirective,
    NgIf,
  ],
  providers: [provideIcons({lucideX, lucideBot, lucideLoader, lucideCornerDownLeft})],
  template: `
    <brn-dialog closeDelay='100'>
      <brn-dialog-overlay hlm/>
      <button size="icon" brnDialogTrigger variant="secondary" hlmBtn>
        <hlm-icon size="sm" name="lucideBot"/>
      </button>
      <div hlmDialogContent class='!w-[95vw] sm:!w-[80vw] sm:max-w-[700px]' *brnDialogContent='let ctx'>
        <hlm-dialog-header>
          <h2 brnDialogTitle hlmDialogTitle>Ask AI a question...</h2>
          <p brnDialogDescription hlmDialogDescription>It is aware of all my articles and can help you get answers faster!</p>
        </hlm-dialog-header>
        <div *ngIf="!(_loading | async); else loading" [innerHTML]="_answer | async" class="my-2 py-2 border-b border-border overflow-scroll h-96">
        </div>
        <ng-template #loading>
          <div class="flex items-center justify-center h-96">
            <hlm-icon class="-mt-10 animate-spin text-muted-foreground/40" name="lucideLoader" size="lg"/>
          </div>
        </ng-template>
        <hlm-dialog-footer>
          <form class="flex w-full gap-4" (ngSubmit)="askOracle()">
            <input class="w-full" hlmInput placeholder="Ask AI a question about my articles..." name="query"
                   [(ngModel)]="query"/>
            <button class="flex-none" size="icon" hlmBtn variant="secondary">
              <hlm-icon  name="lucideCornerDownLeft" size="sm"/>
            </button>
          </form>
        </hlm-dialog-footer>
        <button brnDialogClose hlm>
          <span class='sr-only'>Close</span>
          <hlm-icon class='flex h-4 w-4' size='100%' name='lucideX'/>
        </button>
      </div>
    </brn-dialog>

  `
})
export class AiComponent {
  private readonly _oracle = inject(AiService);
  private readonly sanitizer = inject(DomSanitizer)
  private readonly _contentRenderer = inject(ContentRenderer);

  protected readonly _state = this._oracle.state$.pipe(tap(state => {
    if (state.status === 'done') {
      this.query = '';
    }
  }));
  protected readonly _loading = this._state.pipe(map(state => state.status === 'loading'));
  protected readonly _answer = this._state.pipe(
    switchMap(state => this._contentRenderer.render(state.answer)),
    map(html => this.sanitizer.bypassSecurityTrustHtml(html)));
  protected query = '';

  public askOracle() {
    if (!this.query || this.query.trim().length === 0) return;
    this._oracle.askOracle(this.query);
  }
}
