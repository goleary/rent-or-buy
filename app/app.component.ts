import {Component} from 'angular2/core';
import {CalculatorComponent} from './calculator/calculator.component';
import {AboutComponent} from './about/about.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
	selector: 'my-app',
	template: `
        <h1>{{title}}</h1>
        <nav>
          <a [routerLink]="['Calculator']">Calculator</a>
          <a [routerLink]="['About']">About</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ],
    styleUrls: ["app/app.component.css"]
})

@RouteConfig([
  {
    path: '/calculator',
    name: 'Calculator',
    component: CalculatorComponent,
    useAsDefault: true
  }
])

@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
])
export class AppComponent 
{
    title: string = "Rent Or Buy";
}