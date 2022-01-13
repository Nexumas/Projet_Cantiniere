import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCardEditComponent } from './admin-card-edit/admin-card-edit.component';
import {CoreModule} from '../../../core/core.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {SharedModule} from '../../../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AdminCardEditComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,

  ]
})
export class AdminCardEditModule { }
