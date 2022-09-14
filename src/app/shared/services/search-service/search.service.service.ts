import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private onSearch: EventEmitter <string> = new EventEmitter <string> ();

constructor() { }

public search(data: string): void {
  this.onSearch.emit(data);

}

get OnSearch() {
  return this.onSearch;

}

}
