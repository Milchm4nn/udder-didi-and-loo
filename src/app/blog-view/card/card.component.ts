import {Component, Input, OnInit} from '@angular/core';
import {Entry} from '../../_models/Entry';
import {animate, group, style, transition, trigger} from '@angular/animations';
import {TagService} from '../../_services/tag/tag.service';
import {DrawerService} from '../../_services/drawer/drawer.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  animations: [
    trigger('collapseExpand', [
      transition(':enter', group([
        animate('10ms', style({
          width: '45%'
        })),
        animate('500ms 300ms ease-in-out', style({
          width: '100%'
        }))
      ])),
      transition(':leave', group([
        animate('10ms', style({
          width: '100%'
        })),
        animate('500ms 10ms ease-in-out', style({
          width: '45%'
        }))
      ]))
    ])]
})

export class CardComponent implements OnInit {
  @Input() entry: Entry;

  constructor(private tagService: TagService, private drawerService: DrawerService) {
  }

  ngOnInit(): void {
  }

  switchTagStatus(tag: string) {
    this.tagService.switchTagStatus(tag);
  }

  openDrawer() {
    this.drawerService.switchStatus(true);
  }
}
