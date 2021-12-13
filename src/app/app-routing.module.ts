import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
import {LogOnGuard} from './core/guards/logon/log-on.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'public'
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule),
    canActivate: [
      LogOnGuard
    ]
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
