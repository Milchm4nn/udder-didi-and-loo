import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entry} from '../../_models/Entry';
import {entries} from '../../mockData';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  scopedEntries = entries;
  filteredEntries: Entry[];

  private ENTRIES: BehaviorSubject<Array<Entry>> = new BehaviorSubject<Array<Entry>>([]);
  public readonly entries: Observable<Array<Entry>> = this.ENTRIES.asObservable();

  constructor() {
    this.ENTRIES.next(this.scopedEntries);
  }

  filterEntries(selectedTags: Array<string>) {
    if (selectedTags.length > 0) {
      this.filteredEntries = [];
      for (const tag of selectedTags) {
        for (const entry of this.scopedEntries) {
          if (entry.tags.includes(tag) && !this.filteredEntries.includes(entry)) {
            this.filteredEntries.push(entry);
          }
        }
      }
      this.ENTRIES.next(this.filteredEntries);
    } else {
      this.ENTRIES.next(this.scopedEntries);
    }
  }
}
