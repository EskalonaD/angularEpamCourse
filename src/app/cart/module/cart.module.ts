import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { CartListComponent } from '../components/cart-list/cart-list.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
