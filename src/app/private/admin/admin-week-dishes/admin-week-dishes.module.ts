import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminWeekDishesComponent } from './admin-week-dishes/admin-week-dishes.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    AdminWeekDishesComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class AdminWeekDishesModule { }
