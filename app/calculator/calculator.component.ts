import {Component, OnInit, ChangeDetectionStrategy} from 'angular2/core';
import {SliderNumberComponent} from '../shared/slider-number.component';
import { CHART_DIRECTIVES } from 'angular2-highcharts'; 

@Component({
	selector: 'my-calculator',
	templateUrl: 'app/calculator/calculator.component.html',
    directives: [CHART_DIRECTIVES, SliderNumberComponent],
    changeDetection:ChangeDetectionStrategy.OnPush
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
    
    housingReturn: number = 3;
    housingReturnString: string = "Annual Housing Price Increase: ";
    maxHousingReturn: number = 10;
    
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
    
    availFunds: number = 63000;
    availFundsString: string = "Fund Available: ";
    maxAvailFunds: number = 200000;
    
    closingCosts: number = 3000;
    closingCostsString: string = "Total Closing Costs: ";
    maxClosingCosts: number = 10000;
    
    houseValue: number = 300000;
    houseValueString: string = "House Value: ";
    maxHouseValue: number = 1000000;
    
    //TEMP VALUES
    propertyTaxPercent: number = 1.5;
    buyInsurance: number = 2000;
    buyMaintenancePercent: number = 1;
    HOA: number = 3000;
    marginalTaxPercent: number = 25;
   
    //difference in cost
    difference: number;
    
    rentArray: number[];
    buyArray: number[];
    
    differenceArray: number[];
    
    options: Object;
    
    constructor()  {
        debugger;
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
            }]
        };
    } 
    ngOnInit():void{
      this.calculateRent();
      
      this.calculateMonthlyPayment();
    }
    calculateRent(){
      console.log("calculating rent array");
      this.rentArray = [];
      var _periodInYears = this.periodInMonths / 12;
      for (var _i = 0; _i < _periodInYears; _i++) {
        //rent with yearly increase - return on investments
        var _rent = (this.rent*12) * Math.pow((1 + this.rentIncrease / 100),_i) - this.availFunds * Math.pow((1 + this.cashReturn / 100), _i) * (this.cashReturn / 100);
        this.rentArray.push(_rent);
      }
    }
    calculateBuy(){
      console.log("calculating buy array");
      this.buyArray = [];
      //local var track principal as we pay it off
      var _principal = this.principal;
      //local var to track house value per year
      var _houseValue = this.houseValue;
      var _periodInYears = this.periodInMonths / 12;
      for (var _i = 0; _i < _periodInYears; _i++) {
        //each year we need to make 12 payments and subtract from gained equity from house appreciation
        var _buy =  12 * this.monthlyPayment 
          - _houseValue * (this.housingReturn - this.propertyTaxPercent - this.buyMaintenancePercent) / 100
          + this.HOA
          + this.buyInsurance;
        //there's 12 monthly payments compounded monthly
        for (var _month = 1; _month <= 12; _month++){
          var _interest = _principal * this.monthlyInterest;
          //paid to principal per month
          var _toPrincipal = this.monthlyPayment - _interest;
          //we gain equity in the house, so we subtract it from buying cost
          _buy -= _toPrincipal;
          //we subtract marginal tax rate from our interest paid 
          _buy -= _interest * this.marginalTaxPercent / 100;
          //subtract from principal our monthly payment
          _principal -= _toPrincipal;
        }
        this.buyArray.push(_buy);
        //housingValue goes up!
        _houseValue = _houseValue * (1 + this.housingReturn / 100)
      }
    }
    
    calculateDifference(){
        console.log("calculating difference");
        var _difference = 0
        for ( var _i = 0; _i < this.yearsToMove; _i ++){
          _difference += this.rentArray[_i] - this.buyArray[_i];
        }
        this.difference = _difference;
    }
    
    calculateMonthlyPayment(){
        console.log("calculating monthlyPayment");
        this.monthlyPayment = this.principal * this.monthlyInterest / (1-Math.pow(1 + this.monthlyInterest,-this.periodInMonths));
        this.calculateBuy();
        this.calculateDifference();
    }
    calculatePrincipal(){
        console.log("calculating principal");
        this.principal = this.monthlyPayment * (1-Math.pow(1 + this.monthlyInterest,-this.periodInMonths)) / this.monthlyInterest;
        this.houseValue = this.principal + this.availFunds;
        this.calculateBuy();
        this.calculateDifference();
    }
    updateRent(rent: number){
        console.log("updating rent");
        this.rent = rent;
        this.calculateRent();
        this.calculateDifference();
    }
    updateYearsToMove(yearsToMove: number){  
        console.log("updating yearsToMove");
        this.yearsToMove = yearsToMove;
        this.calculateDifference();
    }
    updateRentIncrease(rentIncrease: number){  
        console.log("updating rentIncrease");
        this.rentIncrease = rentIncrease;
        this.calculateRent();
        this.calculateDifference();
    }
    updateCashReturn(cashReturn: number){
        console.log("updatingcashReturnrent");
        this.cashReturn = cashReturn;
        this.calculateRent();
        this.calculateDifference();
    }
    updateHousingReturn(housingReturn: number){
        console.log("updating housingReturn");
        this.housingReturn = housingReturn;
        this.calculateBuy();
        this.calculateDifference();
    }
    updatePrincipal(principal: number){
        this.principal = principal;
        this.houseValue = this.principal + this.availFunds - this.closingCosts;
        this.calculateMonthlyPayment();
    }
    updatePeriod(period: number){
        console.log("updating periodInMonths");
        this.periodInMonths = period * 12;
        this.calculateMonthlyPayment();
    }
    updateMonthlyPayment(monthlyPayment: number){
        console.log("updating monthlyPayment");
        this.monthlyPayment = monthlyPayment;
        this.calculatePrincipal();
    }
    updateInterest(interest: number){
        console.log("updating monthlyInterest");
        this.monthlyInterest = interest / 1200;
        this.calculateMonthlyPayment();
    }
    updateAvailFunds(availFunds: number){
        console.log("updating availFunds");
        this.availFunds = availFunds;
        this.updatePrincipal(this.houseValue - (availFunds - this.closingCosts));
    }
    updateHouseValue(houseValue: number){
        console.log("updating houseValue");
        this.updatePrincipal(houseValue - (this.availFunds - this.closingCosts));
    }
    updateClosingCosts(closingCosts: number){
        console.log("updating closingCosts");
        this.closingCosts = closingCosts;
        this.updatePrincipal(this.houseValue - (this.availFunds - closingCosts));
    }
}