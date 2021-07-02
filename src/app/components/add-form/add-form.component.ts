import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Memo } from '../../Memo';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-add-form',
    templateUrl: './add-form.component.html',
    styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
    description: string;
    date: string;
    priority: string;
    @Output() onAddMemo: EventEmitter<Memo> = new EventEmitter();

    showAddForm : boolean = false;
    subscription: Subscription;
    constructor(private uiService : UiService) {
        this.subscription = this.uiService.getShowAddForm().subscribe((showAddForm) => this.showAddForm = showAddForm);
     }

    ngOnInit(): void {

    }

    onSubmit() {
        if (!this.description) {
            alert("Please enter some description.");
            return;
        }
        if (!this.date) {
            alert("Please enter a date.");
            return;
        }
        if (!this.priority) {
            alert("Please select a priority");
            return;
        }

        const newMemo = {
            description: this.description,
            date: this.date,
            priority: this.priority,
            finished: false
        };


        this.onAddMemo.emit(newMemo);

        this.description = "";
        this.date = "";


    }
}
