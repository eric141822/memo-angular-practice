import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  showAddForm : boolean = false;
  color: string = 'green';
  constructor(private uiService : UiService, private router : Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.showAddForm = !this.showAddForm;
    (this.showAddForm) ? this.color = 'red' : this.color = 'green';
    this.uiService.sendShowAddForm(this.showAddForm);
  }

  hasURL(route : string){
      return this.router.url === route;
  }

}
