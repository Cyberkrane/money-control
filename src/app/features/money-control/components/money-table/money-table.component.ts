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
public headers: string[] = [] ;
@Input() 
public items: Buys[] = [] ;


getTotal(): string|number {
  return this.items.reduce((acc, item) => acc + item.price, 0);
}

}
