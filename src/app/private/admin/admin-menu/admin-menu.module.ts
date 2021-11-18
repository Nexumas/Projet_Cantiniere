import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMenuRoutingModule } from './admin-menu-routing.module';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    AdminMenuRoutingModule
  ]
})
export class AdminMenuModule { }
