import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CartComponent } from './cart/cart.component';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserModule { }
