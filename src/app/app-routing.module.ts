import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import {IndexComponent} from './public/index/index.component';
import { InscriptionComponent } from './public/inscription/inscription.component';
import { PanierComponent } from './public/panier/panier.component';
import { PagenotfoundComponent } from './core/pagenotfound/pagenotfound.component';
import { GestionPlatComponent } from './private/admin/gestion-plat/gestion-plat.component';
import { CarteUserComponent } from './public/carte-user/carte-user.component';

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
    path : 'gestion-plat',
    component : GestionPlatComponent,
  },
  {
    path : 'carte',
    component : CarteUserComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
