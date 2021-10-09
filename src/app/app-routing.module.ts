import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {PanierComponent} from './panier/panier.component';

const routes: Routes = [

  {
    path : '',
    component : IndexComponent,

  },
  {
    path : 'panier',
    component : PanierComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
