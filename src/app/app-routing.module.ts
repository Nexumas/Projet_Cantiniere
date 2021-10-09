import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {InscriptionComponent} from './inscription/inscription.component';

const routes: Routes = [

  {
    path: '',
    component : IndexComponent,

  },
  {
    path: 'inscription',
    component: InscriptionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
