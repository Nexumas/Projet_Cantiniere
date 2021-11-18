import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftsidebarComponent} from './components/leftsidebar/leftsidebar.component';
import {PublicRoutingModule} from '../public/public-routing.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [
        LeftsidebarComponent
    ],
    exports: [
        LeftsidebarComponent
    ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule
  ]
})
export class CoreModule { }