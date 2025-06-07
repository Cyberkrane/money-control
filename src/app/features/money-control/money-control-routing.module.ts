import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyControlComponent } from './money-control/money-control.component';

const routes: Routes = [
  {
    path: '',
    component: MoneyControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyControlRoutingModule { }
