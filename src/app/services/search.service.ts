import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private subject = new Subject<string>();
  constructor() { }

  sendSearch(keyword:string){
    this.subject.next(keyword);
  }

  getSearch(){
      return this.subject.asObservable();
  }
}
