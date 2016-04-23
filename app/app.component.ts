import {Component, OnInit} from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';

@Component({
	selector: 'my-app',
	template: `
        <h1>My First 2 App</h1>
        <div id = "container" style = "width:100%">
        <input type="text" pInputText [(ngModel)]="val" style = "float:left; width: 25%;"/>
        <p-slider [(ngModel)]="val" style = "float:left; width: 75%;"></p-slider>
        </div>
    `,
    directives: [InputText, Slider]
})
export class AppComponent implements OnInit 
{
    val: number;
    
    ngOnInit() {
        this.val = 0;
    }
}