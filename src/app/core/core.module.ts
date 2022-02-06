import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftsidebarComponent} from './components/leftsidebar/leftsidebar.component';
import {PublicRoutingModule} from '../public/public-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { CalendarDishesComponent } from './components/calendar-dishes/calendar-dishes.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { AdminCalendarDishesComponent } from './components/admin-calendar-dishes/admin-calendar-dishes.component';



@NgModule({
    declarations: [
        LeftsidebarComponent,
        CalendarDishesComponent,
        AdminCalendarDishesComponent
    ],
  exports: [
    LeftsidebarComponent,
    CalendarDishesComponent,
    AdminCalendarDishesComponent
  ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})
export class CoreModule { }
