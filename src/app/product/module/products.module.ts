import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../components/product-component/product-component.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductService } from '../services/product.service';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService,
  ],
  exports: [
    ProductListComponent,
    // ProductComponent,
  ]
})
export class ProductsModule { }
