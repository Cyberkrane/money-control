import { Injectable } from '@angular/core';
import { CATEGORY } from '../constants/category.constants';
import { Buys } from '../interfaces/buys.interface';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

      public buys = [
      {
        id: '1',
        category: CATEGORY.FOOD,
        description: 'manzana',
        price: 100,
        date: new Date()
      },
      {
        id: '2',
        category: CATEGORY.FOOD,
        description: 'banana',
        price: 100,
        date: new Date()
      },
      {
        id: '3',
        category: CATEGORY.FOOD,
        description: 'pera',
        price: 100,
        date: new Date()
      }
    ]
  

  constructor() { }

  getAllBuys() {
    return this.buys;
  }

  getBuyById(id: string) {
    return this.buys.find(buy => buy.id === id);
  }

  editBuy(buy: Buys) {
   throw new Error('Method not implemented.');
  }

  deleteBuy(id: string) {
    throw new Error('Method not implemented.');
  }

}
