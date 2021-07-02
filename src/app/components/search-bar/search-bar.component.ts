import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    faSearch = faSearch;
    search : string;

    constructor(private searchService: SearchService, private router : Router) { }

    ngOnInit(): void {
    }

    onSearch(){
        if (!this.search){
            alert("Please enter search keyword.");
            return;
        }
        this.searchService.sendSearch(this.search);
        this.search = '';
    }

    hasURL(route : string){
        return this.router.url === route;
    }

}
