import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-toolbox',
    templateUrl: './toolbox.component.html',
    styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

    public searchValue: String;

    constructor() { }

    ngOnInit() {
        this.searchValue = '';
    }

    find() {
        console.log(`Search value: ${this.searchValue}`);
    }
}
