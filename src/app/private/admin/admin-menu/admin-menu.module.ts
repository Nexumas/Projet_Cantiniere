import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../../core/core.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from '../../../shared/shared.module';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AdminMenuComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        CoreModule,
        NgxMaterialTimepickerModule,
        MatProgressSpinnerModule,
    ]
})
export class AdminMenuModule { }
