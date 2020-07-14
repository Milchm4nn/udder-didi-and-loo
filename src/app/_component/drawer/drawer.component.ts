import { Component, OnInit } from '@angular/core';
import {DrawerService} from '../../_services/drawer/drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent implements OnInit {

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  closeDrawer() {
    this.drawerService.switchStatus(false);
  }
}
