import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {AdminModule} from './admin/admin.module';
import {UserAccountComponent} from './user/user-account/user-account.component';
import { UserAccountOverviewComponent } from './user/user-account-overview/user-account-overview.component';
import { UserAccountInformationComponent } from './user/user-account-information/user-account-information.component';
import { UserAccountOrderComponent } from './user/user-account-order/user-account-order.component';


@NgModule({
  declarations: [
    UserAccountComponent,
    UserAccountOverviewComponent,
    UserAccountInformationComponent,
    UserAccountOrderComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AdminModule
  ]
})
export class PrivateModule { }
