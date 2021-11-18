import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrderSummaryRoutingModule } from './admin-order-summary-routing.module';
import { AdminOrderSummaryComponent } from './admin-order-summary/admin-order-summary.component';


@NgModule({
  declarations: [
    AdminOrderSummaryComponent
  ],
  imports: [
    CommonModule,
    AdminOrderSummaryRoutingModule
  ]
})
export class AdminOrderSummaryModule { }
