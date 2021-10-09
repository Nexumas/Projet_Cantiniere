import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {IndexComponent} from './index/index.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GestionPlatComponent } from './gestion-plat/gestion-plat.component';
import { CarteUserComponent } from './carte-user/carte-user.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path : 'panier',
    component : PanierComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent
  },
  {
    path : 'gestion-plat',
    component : GestionPlatComponent,
  },
  {
    path : 'carte',
    component : CarteUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
