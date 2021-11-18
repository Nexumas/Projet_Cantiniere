import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {AuthModule} from './auth/auth.module';
import { CardDishesComponent } from './card-dishes/card-dishes.component';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    CardDishesComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AuthModule
  ]
})
export class PublicModule { }
