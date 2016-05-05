import { Component, OnChanges, OnInit, Input,
         Output, EventEmitter } from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';

@Component({
    selector: 'slider-number',
    directives: [InputText, Slider ],
    templateUrl: 'app/shared/slider-number.component.html'
})

export class SliderNumberComponent implements OnInit{
    @Input() value: number;
    @Input() labelText: string;
    @Input() maxValue: number;
    @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();
     
    onChanges(number): void {
        this.value = number;
        this.valueChanged.emit(this.value);
    }
    
    
    //this is buggy as fuck lol
    adjustMax(){
        // if (this.maxValue < (1.5 * this.value)){
        //     this.maxValue = 1.5 * this.value;
        // }
        // else if (this.maxValue > (3 * this.value)){
        //     if (3 * this.value < this.minimumMax){
        //         this.maxValue = this.minimumMax;
        //     }else{
        //         this.maxValue = 3 * this.value;
        //     }
        // }
    }
    
    ngOnInit(): void{
        //this.adjustMax();
    }
}