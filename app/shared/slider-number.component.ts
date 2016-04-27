import { Component, OnChanges, OnInit, Input,
         Output, EventEmitter } from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';

@Component({
    selector: 'slider-number',
    directives: [InputText, Slider ],
    templateUrl: 'app/shared/slider-number.component.html'
})

export class SliderNumberComponent{
    @Input() value: number
    @Input()  labelText: string;
    @Output() sliderChanged: EventEmitter<number> = new EventEmitter<number>();
     
    onChanges(): void {
        this.sliderChanged.next(this.value);
    }
}