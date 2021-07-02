import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideService {
  subject = new Subject<string>();;
  constructor() { }
  sendCategory(category:string){
    this.subject.next(category);
  }

  getCategory(){
      return this.subject.asObservable();
  }
}
