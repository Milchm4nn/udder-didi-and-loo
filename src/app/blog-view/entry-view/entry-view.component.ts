import {Component, OnInit} from '@angular/core';
import {entries} from '../../mockData';
import {ActivatedRoute} from '@angular/router';
import {Entry} from '../../_models/Entry';

@Component({
  selector: 'app-entry-view',
  templateUrl: './entry-view.component.html',
  styleUrls: ['./entry-view.component.less']
})
export class EntryViewComponent implements OnInit {
  entryId;
  entry;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.entryId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.entryId);
    this.entry = entries.find(e => e.id === this.entryId);
  }
}
