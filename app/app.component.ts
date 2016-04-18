import {Component} from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';

@Component({
	selector: 'my-app',
	template: `
        <h1>My First 2 App</h1>
        <input type="text" pInputText [(ngModel)]="text" />
        {{text}}
        <p-slider [(ngModel)]="val"></p-slider>
        {{val}}
    `,
    directives: [InputText, Slider]
})
export class AppComponent {
    val: number;
    text: string;
}