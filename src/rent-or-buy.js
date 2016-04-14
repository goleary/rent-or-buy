import {Component, View} from 'angular2/core';

@Component({
  selector: 'rent-or-buy'
})

@View({
  templateUrl: 'rent-or-buy.html'
})

export class RentOrBuy {

  constructor() {
    console.info('RentOrBuy Component Mounted Successfully');
  }

}
