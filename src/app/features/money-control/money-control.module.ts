import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyControlRoutingModule } from './money-control-routing.module';
import { MoneyControlComponent } from './money-control/money-control.component';
import { MoneyTableComponent } from './components/money-table/money-table.component';


@NgModule({
  declarations: [
    MoneyControlComponent,
    MoneyTableComponent
  ],
  imports: [
    CommonModule,
    MoneyControlRoutingModule
  ]
})
export class MoneyControlModule { }
