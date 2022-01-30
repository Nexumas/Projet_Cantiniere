import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AdminWeekDishesRoutingModule } from './admin-week-dishes-routing.module';
import { AdminWeekDishesComponent } from './admin-week-dishes/admin-week-dishes.component';
import { CoreModule } from '../../../core/core.module';


@NgModule({
  declarations: [
    AdminWeekDishesComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
    // ExpansionBarComponent
    // AdminWeekDishesRoutingModule
  ]
})
export class AdminWeekDishesModule { }
