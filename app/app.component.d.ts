import { OnInit } from 'angular2/core';
export declare class AppComponent implements OnInit {
    rent: number;
    principal: number;
    monthlyPayment: number;
    period: number;
    rentString: string;
    principalString: string;
    mortgagePeriodString: string;
    monthlyPaymentString: string;
    ngOnInit(): void;
    updateRent(rent: number): void;
    updatePrincipal(principal: number): void;
    updatePeriod(period: number): void;
    updateMonthlyPayment(monthlyPayment: number): void;
}
