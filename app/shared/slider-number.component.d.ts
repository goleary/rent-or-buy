import { EventEmitter } from 'angular2/core';
export declare class SliderNumberComponent {
    value: number;
    labelText: string;
    sliderChanged: EventEmitter<number>;
    onChanges(): void;
}
