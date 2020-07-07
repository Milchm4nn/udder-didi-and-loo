import { Component, OnInit } from '@angular/core';
import {TagService} from '../../_services/tag/tag.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  tags: string[];

  tags$: Observable<Array<string>>;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tags$ = this.tagService.tags;

    // Todo: replace with observable
    this.tags = this.tagService.getTags();
  }

  switchTagStatus(tag: string) {
    this.tagService.switchTagStatus(tag);
  }
}
