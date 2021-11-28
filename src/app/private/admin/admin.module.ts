import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AdminUserAccountModule} from './admin-user-account/admin-user-account.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,

    AdminUserAccountModule
  ]
})
export class AdminModule { }
