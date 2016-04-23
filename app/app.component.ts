import {Component, OnInit} from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
    directives: [InputText, Slider]
})
export class AppComponent implements OnInit 
{
    val: number;
    
    ngOnInit() {
        this.val = 0;
    }
}