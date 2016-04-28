System.register(['angular2/core', 'primeng/primeng'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, primeng_1;
    var SliderNumberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            SliderNumberComponent = (function () {
                function SliderNumberComponent() {
                    this.sliderChanged = new core_1.EventEmitter();
                }
                SliderNumberComponent.prototype.onChanges = function () {
                    //this.adjustMax();
                    this.sliderChanged.next(this.value);
                };
                //this is buggy as fuck lol
                SliderNumberComponent.prototype.adjustMax = function () {
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
                };
                SliderNumberComponent.prototype.ngOnInit = function () {
                    //this.adjustMax();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SliderNumberComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SliderNumberComponent.prototype, "labelText", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], SliderNumberComponent.prototype, "maxValue", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SliderNumberComponent.prototype, "sliderChanged", void 0);
                SliderNumberComponent = __decorate([
                    core_1.Component({
                        selector: 'slider-number',
                        directives: [primeng_1.InputText, primeng_1.Slider],
                        templateUrl: 'app/shared/slider-number.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SliderNumberComponent);
                return SliderNumberComponent;
            }());
            exports_1("SliderNumberComponent", SliderNumberComponent);
        }
    }
});
//# sourceMappingURL=slider-number.component.js.map