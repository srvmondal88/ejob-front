import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { NgxSpinnerModule } from "ngx-spinner";
import { UsersComponent } from './users/users.component';
import { NgxPaginationModule } from 'ngx-pagination';


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
    EditproductComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
