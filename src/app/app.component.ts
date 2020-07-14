import { Component } from '@angular/core';
import {DrawerService} from './_services/drawer/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Didi & Loo';
  isDrawerActive;

  constructor(private drawer: DrawerService) {
    this.isDrawerActive = drawer.active;
  }
}
