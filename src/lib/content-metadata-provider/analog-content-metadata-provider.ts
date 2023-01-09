import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export abstract class ContentMetadataProvider {
  public injectMetadata(): Observable<any[]> {
    return of([]);
  }
}
