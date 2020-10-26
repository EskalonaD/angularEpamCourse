import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { CartListComponent } from '../components/cart-list/cart-list.component';
import { CartService } from '../services/cart.service';
import { SharedModule } from 'src/app/shared/module/shared.module';



@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
  providers: [
    CartService,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CartListComponent,
  ],
})
export class CartModule { }
