// Service hallitsee sovelluksessa tehtyjen tilausten tilaa esim. hintaa jota tarvitaan menu, ostoskori ja dialog komponenteissa

import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  totalPrice: number = 0;

  constructor() {}

  countPrice(order: Menu[]) {
    this.totalPrice = 0;
    for (let i = 0; i < order.length; i++) {
      this.totalPrice = this.totalPrice + order[i].hinta;
    }
    return this.totalPrice;
  }
}
