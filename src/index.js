import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RentOrBuy} from 'rent-or-buy';

@Component({
  selector: 'main'
})

@View({
  directives: [RentOrBuy],
  template: `
    <rent-or-buy></rent-or-buy>
  `
})

class Main {

}

bootstrap(Main);
