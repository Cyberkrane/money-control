import { Component } from '@angular/core';
import { Buys } from '../interfaces/buys.interface';
import { CATEGORY } from '../constants/category.constants';

@Component({
  selector: 'money-control',
  templateUrl: './money-control.component.html',
  styleUrls: ['./money-control.component.scss']
})
export class MoneyControlComponent {

  public  title: string = 'money control';
  public  version: string = '1.0.0';
  public  buys: Buys[] = [];
  public  categories = Object.values(CATEGORY);

}
