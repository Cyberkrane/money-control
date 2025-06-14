import { Component, Input } from '@angular/core';
import { Buys } from '../../interfaces/buys.interface';


@Component({
  selector: 'money-table',
  templateUrl: './money-table.component.html',
  styleUrls: ['./money-table.component.scss']
})
export class MoneyTableComponent {

  //TODO: convertir este componente en un componente reutilizable de tipo presentacional
  @Input()
  public headers: string[] = [];

  @Input()
  public items: Buys[] = [];

  public editBuy: string = 'Editar la compra de: ';
  public removeBuy: string = 'Eliminar la compra de: ';


  getTotal(): string | number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
  updateBuy(_t12: number) {
    throw new Error('Method not implemented.');
  }

  deleteBuy(_t12: number) {
    throw new Error('Method not implemented.');
  }

}
