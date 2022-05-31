import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddCow: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddCow(): void {
    this.showAddCow = !this.showAddCow;
    this.subject.next(this.showAddCow);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}