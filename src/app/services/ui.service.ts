import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<boolean>();
  constructor() { }
  
  sendShowAddForm(showAddForm : boolean){
      this.subject.next(showAddForm);
  }

  getShowAddForm(){
      return this.subject.asObservable();
  }
}
