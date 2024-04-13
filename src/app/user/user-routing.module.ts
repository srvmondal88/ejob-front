import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductComponent},
  { path: 'orders', component: OrderComponent},
  { path: 'cart', component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
