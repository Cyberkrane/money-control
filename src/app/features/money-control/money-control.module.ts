import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyControlRoutingModule } from './money-control-routing.module';
import { MoneyControlComponent } from './money-control/money-control.component';
import { MoneyTableComponent } from './components/money-table/money-table.component';
import { MoneyDropdownComponent } from './components/money-dropdown/money-dropdown.component';
import { MoneyModalComponent } from './components/money-modal/money-modal.component';


@NgModule({
  declarations: [
    MoneyControlComponent,
    MoneyTableComponent,
    
  ],
  imports: [
    CommonModule,
    MoneyControlRoutingModule,
    MoneyDropdownComponent,
    MoneyModalComponent
  ]
})
export class MoneyControlModule { }
