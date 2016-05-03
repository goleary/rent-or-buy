System.register(['angular2/core', 'primeng/primeng', './shared/slider-number.component'], function(exports_1, context_1) {
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
    var core_1, primeng_1, slider_number_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (slider_number_component_1_1) {
                slider_number_component_1 = slider_number_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.rent = 2000;
                    this.rentString = "Monthly Rent: ";
                    this.maxRent = 5000;
                    this.principal = 300000;
                    this.principalString = "Total Principal: ";
                    this.maxPrincipal = 1000000;
                    this.monthlyPayment = 2000;
                    this.monthlyPaymentString = "Monthly Payment: ";
                    this.maxMonthlyPayment = 8000;
                    this.periodInMonths = 240;
                    this.mortgagePeriodString = "Amortization Period: ";
                    this.maxPeriod = 30;
                    this.monthlyInterest = 0.005;
                    this.interestString = "Interest Rate: ";
                    this.maxInterest = 0.08;
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.calculateMonthlyPayment = function () {
                    this.monthlyPayment = this.principal * this.monthlyInterest / (1 - Math.pow(1 + this.monthlyInterest, -this.periodInMonths));
                };
                AppComponent.prototype.calculatePrincipal = function () {
                    this.principal = this.monthlyPayment * (1 - Math.pow(1 + this.monthlyInterest, -this.periodInMonths)) / this.monthlyInterest;
                };
                AppComponent.prototype.updateRent = function (rent) {
                    this.rent = rent;
                };
                AppComponent.prototype.updatePrincipal = function (principal) {
                    this.principal = principal;
                    this.calculateMonthlyPayment();
                };
                AppComponent.prototype.updatePeriod = function (period) {
                    this.periodInMonths = period * 12;
                    this.calculateMonthlyPayment();
                };
                AppComponent.prototype.updateMonthlyPayment = function (monthlyPayment) {
                    this.monthlyPayment = monthlyPayment;
                    this.calculatePrincipal();
                };
                AppComponent.prototype.updateInterest = function (interest) {
                    this.monthlyInterest = interest / 12;
                    this.calculateMonthlyPayment();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [primeng_1.InputText, primeng_1.Slider, slider_number_component_1.SliderNumberComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map