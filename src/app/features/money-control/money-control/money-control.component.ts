import { Component, OnInit } from '@angular/core';
import { Buys } from '../interfaces/buys.interface';
import { CATEGORY } from '../constants/category.constants';
import { BuyService } from '../services/buy.service.service';

@Component({
  selector: 'money-control',
  templateUrl: './money-control.component.html',
  styleUrls: ['./money-control.component.scss']
})
export class MoneyControlComponent implements OnInit {

  public title: string = 'money control';
  public version: string = '1.0.0';
  public headers: string[] = ['categoria', 'descripcion','fecha', 'precio', 'acciones' ];
  public buys: Buys[] = [];
  public categories = Object.values(CATEGORY);

  constructor(private buyService: BuyService) { }

  ngOnInit(): void {
    this.buyService.getAllBuys().forEach(buy => this.buys.push(buy));
  }

}
