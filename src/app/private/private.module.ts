import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {AdminModule} from './admin/admin.module';
import {UserAccountComponent} from './user/user-account/user-account.component';


@NgModule({
  declarations: [
    UserAccountComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AdminModule
  ]
})
export class PrivateModule { }
