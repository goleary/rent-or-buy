import {Component, OnInit} from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';
import {SliderNumberComponent} from '../shared/slider-number.component';

@Component({
	selector: 'my-calculator',
	templateUrl: 'app/calculator/calculator.component.html',
    directives: [InputText, Slider, SliderNumberComponent]
})
export class CalculatorComponent implements OnInit
{
    rent: number = 2000;
    rentString: string = "Monthly Rent: ";
    maxRent: number = 5000;
    
    yearsToMove: number = 10;
    yearsToMoveString: string = "Years Before Move: ";
    maxYearsToMove: number = 30;
    
    rentIncrease: number = 5;
    rentIncreaseString: string = "Yearly Rent Increase Rate: ";
    maxRentIncrease: number = 10;
    
    cashReturn: number = 5;
    cashReturnString: string = "Annual Return on Investments: ";
    maxCashReturn: number = 10;
    
    housingReturn: number = 5;
    housingReturnString: string = "Annual Housing Price Increase: ";
    maxHousingReturn: number = 10;
    
    principal: number = 243000;
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
    
    closingCosts: number = 3000;
    closingCostsString: string = "Total Closing Costs: ";
    maxClosingCosts: number = 10000;
    
    houseValue: number = 300000;
    houseValueString: string = "House Value: ";
    maxHouseValue: number = 1000000;
    
    totalRent: number;
    totalBuy: number;
    difference: number;
    
    rentArray: number[];
    buyArray: number[];
    ngOnInit():void{
      this.calculateRent();
      this.calculateBuy();
      this.calculateDifference;
    }
    calculateRent(){
      this.rentArray = [];
      this.totalRent = 0;
      for (var _i = 0; _i < this.yearsToMove; _i++) {
        //rent with yearly increase - return on investments
        var _rent = (this.rent*12) * Math.pow((1 + this.rentIncrease / 100),_i) - this.availFunds * Math.pow((1 + this.cashReturn / 100), _i) * (this.cashReturn / 100);
        this.rentArray.push();
        this.totalRent += _rent;
      }
    }
    calculateBuy(){
      
    }
    calculateDifference(){
      this.difference = this.totalRent - this.totalBuy;
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
        this.calculateRent();
    }
    updatePrincipal(principal: number){
        this.principal = principal;
        this.houseValue = principal + this.availFunds - this.closingCosts;
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
        this.updatePrincipal(this.houseValue - (availFunds - this.closingCosts));
    }
    updateHouseValue(houseValue: number){
        this.houseValue = houseValue;
        this.updatePrincipal(houseValue - (this.availFunds - this.closingCosts));
    }
    updateClosingCosts(closingCosts: number){
        this.closingCosts = closingCosts;
        this.updatePrincipal(this.houseValue - (this.availFunds - closingCosts));
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