import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {CardDishesComponent} from './card-dishes/card-dishes.component';
import {PagenotfoundComponent} from '../core/components/pagenotfound/pagenotfound.component';
import {LogOnGuard} from '../core/guards/logon/log-on.guard';
import {LogonDeactivateGuard} from '../core/guards/logon/logon-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [
      LogonDeactivateGuard
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'carddishes',
    component: CardDishesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
