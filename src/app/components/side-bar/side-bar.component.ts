import { Component, OnInit } from '@angular/core';
import { SideService } from '../../services/side.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {
    faTimes = faTimes;
    selectedMost : boolean = false;
    selectedMildly : boolean = false;
    selectedLeast : boolean = false;

  constructor(private sideService : SideService, private searchService : SearchService, private router : Router) { }

  ngOnInit(): void {
    this.searchService.getSearch().subscribe(() => {
        this.cancelSelect();
    });
  }

  onSelect(evt){
    //console.log(evt.target.textContent);
    switch (evt.target.textContent){
        case "Most Important":
            if (this.selectedMildly || this.selectedLeast){
                this.selectedMildly = false;
                this.selectedLeast = false;
            }
            this.selectedMost = true;
            break;
        case "Mildly Important":
            if (this.selectedMost || this.selectedLeast){
                this.selectedMost = false;
                this.selectedLeast = false;
            }
            this.selectedMildly = true;
            break;
        case "Least Important":
            if (this.selectedMost || this.selectedMildly){
                this.selectedMost = false;
                this.selectedMildly = false;
            }
            this.selectedLeast = true;
            break;
    }
    this.sideService.sendCategory(evt.target.textContent);
  }

  cancelSelect(){
      this.selectedMost = false;
      this.selectedMildly = false;
      this.selectedLeast = false;
      this.sideService.sendCategory("NONE");
  }

  hasURL(route : string){
      return this.router.url === route;
  }
}
