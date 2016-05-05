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
                    this.principal = 240000;
                    this.principalString = "Total Principal: ";
                    this.maxPrincipal = 800000;
                    this.monthlyPayment = 2000;
                    this.monthlyPaymentString = "Monthly Payment: ";
                    this.maxMonthlyPayment = 8000;
                    this.periodInMonths = 240;
                    this.mortgagePeriodString = "Amortization Period: ";
                    this.maxPeriod = 30;
                    this.monthlyInterest = 0.005;
                    this.interestString = "Interest Rate: ";
                    this.maxInterest = 10;
                    this.availFunds = 60000;
                    this.availFundsString = "Fund Available: ";
                    this.maxAvailFunds = 200000;
                    this.houseValue = 300000;
                    this.houseValueString = "House Value: ";
                    this.maxhouseValue = 1000000;
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.calculateMonthlyPayment = function () {
                    this.monthlyPayment = this.principal * this.monthlyInterest / (1 - Math.pow(1 + this.monthlyInterest, -this.periodInMonths));
                };
                AppComponent.prototype.calculatePrincipal = function () {
                    this.principal = this.monthlyPayment * (1 - Math.pow(1 + this.monthlyInterest, -this.periodInMonths)) / this.monthlyInterest;
                    this.houseValue = this.principal + this.availFunds;
                };
                AppComponent.prototype.updateRent = function (rent) {
                    this.rent = rent;
                };
                AppComponent.prototype.updatePrincipal = function (principal) {
                    this.principal = principal;
                    this.houseValue = principal + this.availFunds;
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
                    this.monthlyInterest = interest / 1200;
                    this.calculateMonthlyPayment();
                };
                AppComponent.prototype.updateAvailFunds = function (availFunds) {
                    this.availFunds = availFunds;
                    this.updatePrincipal(this.houseValue - availFunds);
                };
                AppComponent.prototype.updateHouseValue = function (houseValue) {
                    this.houseValue = houseValue;
                    this.updatePrincipal(houseValue - this.availFunds);
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