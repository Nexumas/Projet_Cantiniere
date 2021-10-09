import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {CarteUserComponent} from './carte-user/carte-user.component';

const routes: Routes = [

  {
    path : '',
    component : IndexComponent,
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
