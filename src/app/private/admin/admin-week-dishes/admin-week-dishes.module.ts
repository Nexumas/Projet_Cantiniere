import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWeekDishesComponent } from './admin-week-dishes/admin-week-dishes.component';
import { AdminCalendarDishesComponent } from './admin-week-dishes/admin-calendar-dishes/admin-calendar-dishes.component';


@NgModule({
  declarations: [
    AdminWeekDishesComponent,
    AdminCalendarDishesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminWeekDishesModule { }
