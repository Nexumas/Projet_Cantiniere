import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWeekDishesRoutingModule } from './admin-week-dishes-routing.module';
import { AdminWeekDishesComponent } from './admin-week-dishes/admin-week-dishes.component';


@NgModule({
  declarations: [
    AdminWeekDishesComponent
  ],
  imports: [
    CommonModule,
    AdminWeekDishesRoutingModule
  ]
})
export class AdminWeekDishesModule { }
