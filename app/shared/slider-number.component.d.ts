import { OnInit, EventEmitter } from 'angular2/core';
export declare class SliderNumberComponent implements OnInit {
    value: number;
    labelText: string;
    maxValue: number;
    sliderChanged: EventEmitter<number>;
    onChanges(): void;
    adjustMax(): void;
    ngOnInit(): void;
}
