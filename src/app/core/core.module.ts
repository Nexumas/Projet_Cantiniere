import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftsidebarComponent} from './components/leftsidebar/leftsidebar.component';
import {PublicRoutingModule} from '../public/public-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CategoriesComponent } from '../private/admin/admin-card-edit/categories-card-edit/categories.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';



@NgModule({
    declarations: [
        LeftsidebarComponent,
        CategoriesComponent
    ],
    exports: [
        LeftsidebarComponent,
        CategoriesComponent
    ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    NgbModule,
  ]
})
export class CoreModule { }
