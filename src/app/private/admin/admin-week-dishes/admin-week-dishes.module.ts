import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWeekDishesComponent } from './admin-week-dishes/admin-week-dishes.component';
import { AdminCalendarDishesComponent } from './admin-week-dishes/admin-calendar-dishes/admin-calendar-dishes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminWeekDishesComponent,
    AdminCalendarDishesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminWeekDishesModule { }
