import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { userauthGuard } from '../auth/userauth.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WishlistitemsComponent } from './wishlistitems/wishlistitems.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [userauthGuard] },
  { path: 'products', component: ProductComponent, canActivate: [userauthGuard] },
  { path: 'orders', component: OrderComponent, canActivate: [userauthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [userauthGuard] },
  { path: 'user-details', component: UserdetailsComponent, canActivate: [userauthGuard] },
  {path: 'wishlist-items', component: WishlistitemsComponent, canActivate: [userauthGuard] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
