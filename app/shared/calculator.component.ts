import {Component, OnInit} from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';
import {SliderNumberComponent} from './slider-number.component';

@Component({
	selector: 'my-calculator',
	templateUrl: 'app/shared/calculator.component.html',
    directives: [InputText, Slider, SliderNumberComponent]
})
export class CalculatorComponent implements OnInit
{
    rent: number = 2000;
    rentString: string = "Monthly Rent: ";
    maxRent: number = 5000;
    
    principal: number = 240000;
    principalString: string = "Total Principal: ";
    maxPrincipal: number = 800000;
    
    monthlyPayment: number = 2000;
    monthlyPaymentString: string = "Monthly Payment: ";
    maxMonthlyPayment: number = 8000;
    
    periodInMonths: number = 240;
    mortgagePeriodString: string = "Amortization Period: ";
    maxPeriod: number = 30;
    
    monthlyInterest: number = 0.005;
    interestString: string = "Interest Rate: ";
    maxInterest: number = 10;
    
    availFunds: number = 60000;
    availFundsString: string = "Fund Available: ";
    maxAvailFunds: number = 200000;
    
    houseValue: number = 300000;
    houseValueString: string = "House Value: ";
    maxhouseValue: number = 1000000;
    
    rentIncrease: number = 0.005;
    rentIncreaseString: string = "Interest Rate: ";
    maxRentIncrease: number = 10;
    
    cashReturn: number = 0.005;
    cashReturnString: string = "Interest Rate: ";
    maxCashReturn: number = 10;
    
    housingReturn: number = 0.005;
    housingReturnString: string = "Interest Rate: ";
    maxHousingReturn: number = 10;
    ngOnInit():void{
    }
    
    calculateMonthlyPayment(){
        this.monthlyPayment = this.principal * this.monthlyInterest / (1-Math.pow(1 + this.monthlyInterest,-this.periodInMonths)); 
    }
    calculatePrincipal(){
        this.principal = this.monthlyPayment * (1-Math.pow(1 + this.monthlyInterest,-this.periodInMonths)) / this.monthlyInterest;
        this.houseValue = this.principal + this.availFunds;
    }
    updateRent(rent: number){
        this.rent = rent;
    }
    updatePrincipal(principal: number){
        this.principal = principal;
        this.houseValue = principal + this.availFunds;
        this.calculateMonthlyPayment();
    }
    updatePeriod(period: number){
        this.periodInMonths = period * 12;
        this.calculateMonthlyPayment();
    }
    updateMonthlyPayment(monthlyPayment: number){
        this.monthlyPayment = monthlyPayment;
        this.calculatePrincipal()
    }
    updateInterest(interest: number){
        this.monthlyInterest = interest / 1200;
        this.calculateMonthlyPayment()
    }
    updateAvailFunds(availFunds: number){
        this.availFunds = availFunds;
        this.updatePrincipal(this.houseValue - availFunds);
    }
    updateHouseValue(houseValue: number){
        this.houseValue = houseValue;
        this.updatePrincipal(houseValue - this.availFunds);
    }
    updateRentIncrease(rentIncrease: number){
        this.rentIncrease = rentIncrease;
    }
    updateCashReturn(cashReturn: number){
        this.cashReturn = cashReturn;
    }
    updateHousingReturn(housingReturn: number){
        this.housingReturn = housingReturn;
    }
}