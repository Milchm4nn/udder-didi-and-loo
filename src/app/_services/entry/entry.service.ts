import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entry} from '../../_models/Entry';
import {entries} from '../../mockData';
import enumerate = Reflect.enumerate;

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

  /* Filter entries in the actual scope by tags */
  filterEntries(selectedTags: Array<string>) {
    if (selectedTags.length > 0) {
      this.filteredEntries = [];
      selectedTags.forEach((tag, index) => {
        /* Add all entries that fit to the first tag into an array */
        if (index === 0) {
            for (const entry of this.scopedEntries) {
              if (entry.tags.includes(tag) && !this.filteredEntries.includes(entry)) {
                this.filteredEntries.push(entry);
              }
            }
        /* Remove all entries that do not contain the following tags from the array */
        } else {
          for (const entry of this.filteredEntries) {
            /* Todo: Look into the bug, causing entries to appear in the filteredEntries tho they shouldn't.
            Probably caused due to the for-of counting onward after deleting an entry, maybe noting all indexes of entries, that are to be
            removed and removing them afterwards would help. */
            if (!entry.tags.includes(tag)) {
              this.filteredEntries.splice(this.filteredEntries.indexOf(entry), 1);
            }
          }
        }
      });
      /* Push the filtered entries to the observable */
      this.ENTRIES.next(this.filteredEntries);
    } else {
      /* Else, if no tags to filter for are selected anymore, push the full scope of entries to the observable */
      this.ENTRIES.next(this.scopedEntries);
    }
  }
}
