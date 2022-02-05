import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrderSummaryComponent } from './admin-order-summary/admin-order-summary.component';
import { CoreModule } from '../../../core/core.module';


@NgModule({
  declarations: [
    AdminOrderSummaryComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class AdminOrderSummaryModule { }
