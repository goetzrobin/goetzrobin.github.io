import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

export type OracleState = {status: 'idle' | 'loading' | 'streaming' | 'done' | 'error', error?: any, answer: string}

const initialState: OracleState = {status: 'idle', error: undefined, answer: ''};

@Injectable({
    providedIn: 'root'
})
export class AiService {
    private readonly _projectUrl = `https://ynbtfpqttjgalowznszz.supabase.co/functions/v1/vector_search`;

    public eventSource?: EventSource;

    private readonly _state$ = new BehaviorSubject<OracleState>(initialState)
    public readonly state$ = this._state$.asObservable();

    public askOracle = (query: string): void => {
    this.eventSource = this.setUpEventSource(new URLSearchParams({ query }));
    }

  private setUpEventSource(query: URLSearchParams): EventSource {
    const eventSource = new EventSource(`${this._projectUrl}?${query}`);

    eventSource.addEventListener("error", (err) => {
        this._state$.next({...this._state$.getValue(), error: err, status: 'error'});
        console.error(err)
    })

    eventSource.addEventListener("message", (e: MessageEvent) => {
        if (e.data === "[DONE]") {
          eventSource.close()
          this._state$.next({...this._state$.getValue(), status: 'done'});
          return
        }
        const completionResponse = JSON.parse(e.data)
        const text = completionResponse.choices[0].text;

        const state = this._state$.getValue();
        this._state$.next({...state, status: 'streaming', answer: state.answer += text});
      });

      // initial loading
      this._state$.next({...this._state$.getValue(), error: undefined, status: 'loading', answer: ''});
      return eventSource;
    }
}
