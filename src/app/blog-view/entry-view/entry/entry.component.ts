import {Component, Input, OnInit} from '@angular/core';
import {TagService} from '../../../_services/tag/tag.service';
import {Entry} from '../../../_models/Entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.less']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
  }

  switchTagStatus(tag: string) {
    this.tagService.switchTagStatus(tag);
  }
}
