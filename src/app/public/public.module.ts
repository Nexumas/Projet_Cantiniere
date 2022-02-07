import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {AuthModule} from './auth/auth.module';
import { CardDishesComponent } from './card-dishes/card-dishes.component';
import { CalendarDishesComponent } from './home/calendar-dishes/calendar-dishes.component';
import {FormsModule} from "@angular/forms";
import {CoreModule} from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    CardDishesComponent,
    CalendarDishesComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AuthModule,
    FormsModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    CartComponent,
    CardDishesComponent
  ]
})
export class PublicModule { }
