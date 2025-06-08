import { Component, OnInit } from '@angular/core';
import { Buys } from '../interfaces/buys.interface';
import { CATEGORY } from '../constants/category.constants';

@Component({
  selector: 'money-control',
  templateUrl: './money-control.component.html',
  styleUrls: ['./money-control.component.scss']
})
export class MoneyControlComponent implements OnInit {

  public title: string = 'money control';
  public version: string = '1.0.0';
  public headers: string[] = ['categoria', 'descripcion', 'precio'];
  public buys: Buys[] = [];
  public categories = Object.values(CATEGORY);

  constructor() { }

  ngOnInit(): void {
    this.buys = [
      {
        id: '1',
        category: CATEGORY.FOOD,
        description: 'manzana',
        price: 100
      },
      {
        id: '2',
        category: CATEGORY.FOOD,
        description: 'banana',
        price: 100
      },
    ]
  }

}
