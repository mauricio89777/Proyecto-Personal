import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() {}
    alertButtons = ['Action'];
    foods = [
      {
        id: 1,
        name: 'Apples',
        type: 'fruit',
      },
      {
        id: 2,
        name: 'Carrots',
        type: 'vegetable',
      },
      {
        id: 3,
        name: 'Cupcakes',
        type: 'dessert',
      },
    ];

    compareWith(o1 :any, o2 :any ):boolean {
      return o1.id === o2.id;
    }

    handleChange(ev:any) {
      console.log('Current value:', JSON.stringify(ev.target.value));
    }

    trackItems(index: number, item: any) {
      return item.id;
    }



}
