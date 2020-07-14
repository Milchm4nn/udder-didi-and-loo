import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entry} from '../../_models/Entry';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private ACTIVE: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly active: Observable<boolean> = this.ACTIVE.asObservable();

  switchStatus(activate: boolean) {
    this.ACTIVE.next(activate);
  }

  constructor() {
  }
}
