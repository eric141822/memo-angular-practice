import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Memo } from '../../Memo';
import { faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-memo-item',
    templateUrl: './memo-item.component.html',
    styleUrls: ['./memo-item.component.css']
})
export class MemoItemComponent implements OnInit {
    @Input() memo !: Memo;
    @Output() delete: EventEmitter<Memo> = new EventEmitter();
    @Output() updatePriority: EventEmitter<Memo> = new EventEmitter();
    faTimes = faTimes;
    faArrowUp = faArrowUp;
    constructor() { }

    ngOnInit(): void {
    }

    onDelete(memo: Memo) {
        this.delete.emit(memo);
    }

    onUpdatePriority(memo: Memo) {
        this.updatePriority.emit(memo);
    }

}
