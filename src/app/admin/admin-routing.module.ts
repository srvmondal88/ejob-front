import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { adminauthGuard } from '../auth/adminauth.guard';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'admin-login',component: LoginComponent},
  { path: 'dashboard',component: DashboardComponent,canActivate:[adminauthGuard] },
  { path: 'categories', component: CategoryComponent,canActivate:[adminauthGuard] },
  { path: 'products',component: ProductComponent, canActivate:[adminauthGuard] },
  { path: 'add-category',component: AddcategoryComponent, canActivate:[adminauthGuard] },
  { path : 'add-product', component: AddproductComponent, canActivate:[adminauthGuard] },
  { path : 'edit-product/:id', component: EditproductComponent, canActivate:[adminauthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
