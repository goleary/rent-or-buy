import { OnInit } from 'angular2/core';
export declare class CalculatorComponent implements OnInit {
    rent: number;
    rentString: string;
    maxRent: number;
    principal: number;
    principalString: string;
    maxPrincipal: number;
    monthlyPayment: number;
    monthlyPaymentString: string;
    maxMonthlyPayment: number;
    periodInMonths: number;
    mortgagePeriodString: string;
    maxPeriod: number;
    monthlyInterest: number;
    interestString: string;
    maxInterest: number;
    ngOnInit(): void;
    calculateMonthlyPayment(): void;
    calculatePrincipal(): void;
    updateRent(rent: number): void;
    updatePrincipal(principal: number): void;
    updatePeriod(period: number): void;
    updateMonthlyPayment(monthlyPayment: number): void;
    updateInterest(interest: number): void;
}
