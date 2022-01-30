import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AdminUserAccountModule} from './admin-user-account/admin-user-account.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {AdminCardEditModule} from './admin-card-edit/admin-card-edit.module';
import {AdminWeekDishesModule} from './admin-week-dishes/admin-week-dishes.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminUserAccountModule,
    AdminCardEditModule,
    AdminWeekDishesModule
  ]
})
export class AdminModule { }
