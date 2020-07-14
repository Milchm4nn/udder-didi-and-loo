import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {EntryService} from '../entry/entry.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  selectedTags: Array<string>;

  private TAGS: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  public readonly tags: Observable<Array<string>> = this.TAGS.asObservable();


  /* Add or remove a tag to/from the actual filter. */
  switchTagStatus(tag: string) {
    if (this.selectedTags != null) {
      /* Remove tag, if it is already selected */
      if (this.selectedTags.find((e => e === tag))) {
        console.log(tag + ' removed');
        this.selectedTags = this.selectedTags.filter(e => e !== tag);
      /* Add tag, if not selected */
      } else {
        console.log(tag + ' added');
        this.selectedTags.push(tag);
      }
      /* Push selected tag onto the observable */
      this.TAGS.next(this.selectedTags);
      this.entryService.filterEntries(this.selectedTags);
    }
  }

  constructor(private entryService: EntryService) {
    this.selectedTags = new Array<string>();
  }
}
