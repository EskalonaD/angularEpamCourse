import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { ProductModel } from '../model/model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {
  @Output() cartEmptyChange: EventEmitter<boolean> = new EventEmitter();
  totalPrice: string[];
  cartItems: ProductModel[];
  private cartItemsSubscription: Subscription;

  constructor(private currency: CurrencyPipe, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartService.getCartItems().pipe(
      tap(cartItems => this.totalPrice = this.cartService.getTotalPriceArr(cartItems)),
    ).subscribe({
      next: cartItems => {
        this.cartItems = cartItems;
        this.totalPrice = this.cartService.getTotalPriceArr(cartItems);
    }});
    // this.totalPrice = this.cartService.getTotalPriceArr();
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }

  onBuy(phoneNumber: string, cartItems: ProductModel[]): void {
    console.log('cartItems async', cartItems)
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
    this.cartEmptyChange.emit(true);
  }

}
