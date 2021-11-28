import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import {AdminModule} from './admin/admin.module';
import {UserAccountComponent} from './user/user-account/user-account.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AdminModule,
  ]
})
export class PrivateModule { }
