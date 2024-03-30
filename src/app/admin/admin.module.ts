import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ProductComponent,
    AddcategoryComponent,
    AddproductComponent,
    EditproductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
