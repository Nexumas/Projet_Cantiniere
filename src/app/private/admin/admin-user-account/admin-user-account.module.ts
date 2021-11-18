import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUserAccountRoutingModule } from './admin-user-account-routing.module';
import { AdminUserAccountComponent } from './admin-user-account/admin-user-account.component';


@NgModule({
  declarations: [
    AdminUserAccountComponent
  ],
  imports: [
    CommonModule,
    AdminUserAccountRoutingModule
  ]
})
export class AdminUserAccountModule { }
