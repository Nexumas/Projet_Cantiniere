import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {GestionPlatComponent} from "./gestion-plat/gestion-plat.component";

const routes: Routes = [

  {
    path : '',
    component : IndexComponent,

  },
  {
    path : 'gestion-plat',
    component : GestionPlatComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
