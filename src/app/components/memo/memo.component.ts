import { MemoService } from './../../services/memo.service';
import { SearchService } from '../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Memo } from '../../Memo';
import { Subscription } from 'rxjs';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SideService } from '../../services/side.service';

//for testing;
import { MEMOS } from '../../mock';
@Component({
    selector: 'app-memo',
    templateUrl: './memo.component.html',
    styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

    memos: Memo[] = [];
    //memos: Memo[] = MEMOS;
    subscription : Subscription;
    keyword: string;
    cancelSearch: boolean = false;
    searchFlag: boolean = true;
    faTimes = faTimes;

    categorySub : Subscription;

    constructor(private memoService: MemoService, private searchService : SearchService, private sideService : SideService) { }

    ngOnInit(): void {
        this.memoService.getMemos().subscribe((memos) => this.memos = memos); //get memo from fake json-server.
        this.subscription = this.searchService.getSearch().subscribe((keyword) => {
            this.searchMemo(keyword);
        });
        this.categorySub = this.sideService.getCategory().subscribe((category) => {
            this.categorizeMemo(category);
        });
    }

    deleteMemo(memo: Memo): void {
        //console.log("test");
        this.memoService.deleteMemo(memo).subscribe(() => this.memos = this.memos.filter((m) => memo.id !== m.id));
    }

    addMemo(memo: Memo) {
        this.memoService.addMemo(memo).subscribe((m) => this.memos.push(m));
    }

    updateMemoPriority(memo: Memo) {
        //console.log("test");
        switch (memo.priority) {
            case "Most Important":
                memo.priority = "Least Important";
                break;
            case "Mildly Important":
                memo.priority = "Most Important";
                break;
            case "Least Important":
                memo.priority = "Mildly Important";
                break;
        }
        this.memoService.updateMemoPriority(memo).subscribe();
    }
    searchMemo(keyword: string){
        if (this.searchFlag){
            this.cancelSearch = !this.cancelSearch;
            this.searchFlag = !this.searchFlag;
        }
        this.memoService.getMemos().subscribe((memos) => this.memos = this.memos.filter((m) => m.description.includes(keyword)));
    }

    eraseSearch(){
        this.memoService.getMemos().subscribe((memos) => this.memos = memos);
        this.cancelSearch = !this.cancelSearch;
        this.searchFlag = !this.searchFlag;
    }

    categorizeMemo(category: string){
        if (category !== "NONE"){
            this.memoService.getMemos().subscribe((memos) => this.memos = memos.filter((m) => m.priority === category));
        }else{
            this.memoService.getMemos().subscribe((memos) => this.memos = memos);
        }
    }
}






