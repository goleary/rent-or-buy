import {Component, OnInit} from 'angular2/core';
import {InputText, Slider} from 'primeng/primeng';
import {SliderNumberComponent} from './shared/slider-number.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
    directives: [InputText, Slider, SliderNumberComponent]
})
export class AppComponent implements OnInit
{
    rent: number;
    principal: number;
    monthlyPayment: number;
    period: number;
    
    rentString: string = "Monthly Rent: ";
    principalString: string = "Total Principal: ";
    mortgagePeriodString: string = "Amortization Period: ";
    monthlyPaymentString: string = "Monthly Payment: ";
    
    ngOnInit():void{
        this.rent = 1000;
        this.principal = 100000;
        this.monthlyPayment = 1000;
        this.period = 15;
    }
    
    updateRent(rent: number){
        this.rent = rent;
    }
    updatePrincipal(principal: number){
        this.principal = principal;
    }
    updatePeriod(period: number){
        this.period = period;
    }
    updateMonthlyPayment(monthlyPayment: number){
        this.monthlyPayment = monthlyPayment;
    }
}