import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../../model/model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  @Output() cartEmptinessChange: EventEmitter<boolean> = new EventEmitter();

  totalPrice: string[];
  cartItems: ProductModel[];
  totalAmount: number;

  private cartItemsSubscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartService.getCartItems().subscribe({
      next: cartItems => {
        this.cartItems = cartItems;
        this.totalPrice = this.cartService.getTotalPriceArr(cartItems);
        this.totalAmount = this.cartService.getTotalAmount(cartItems);
      }
    });

  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }

  onBuy(phoneNumber: string, cartItems: ProductModel[]): void {
    if (phoneNumber === undefined || Number.isNaN(+phoneNumber) || !Number.isInteger(+phoneNumber)) {
      alert('Некорректный номер. Попробуйте еще раз.');
    }
    else {
      this.cartService.makeOrder(cartItems);
      alert('Наши специалисты свяжуться с вам в ближайшее время, для уточнения деталей Вашего заказа.');
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartEmptinessChange.emit(true);
  }
}
