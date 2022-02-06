import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {AuthModule} from './auth/auth.module';
import { CardDishesComponent } from './card-dishes/card-dishes.component';
import {CoreModule} from '../core/core.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    CardDishesComponent,
  ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        AuthModule,
        CoreModule,
        FormsModule
    ],
  exports: [
    HomeComponent,
    CartComponent,
    CardDishesComponent
  ]
})
export class PublicModule { }
