import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminWeekDishesComponent} from './admin-week-dishes/admin-week-dishes/admin-week-dishes.component';
import {AdminUserAccountComponent} from './admin-user-account/admin-user-account/admin-user-account.component';
import {AdminOrderSummaryComponent} from './admin-order-summary/admin-order-summary/admin-order-summary.component';

const routes: Routes = [
  {
    path: 'weekdishes',
    component: AdminWeekDishesComponent
  },
  {
    path: 'usersaccount',
    component: AdminUserAccountComponent
  },
  {
    path: 'orders',
    component: AdminOrderSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
