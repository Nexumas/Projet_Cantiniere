import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../../core/core.module';


@NgModule({
  declarations: [
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class AdminMenuModule { }
