import { Component, OnInit } from '@angular/core';
import {entries} from '../mockData';
import {EntryService} from '../_services/entry/entry.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.less']
})

export class BlogViewComponent implements OnInit {
  entries;

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entries = this.entryService.entries;
  }


}
