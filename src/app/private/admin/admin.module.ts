import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminUserAccountModule} from './admin-user-account/admin-user-account.module';
import {AdminCardEditModule} from './admin-card-edit/admin-card-edit.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminUserAccountModule,
    AdminCardEditModule,
    SharedModule
  ]
})
export class AdminModule { }
