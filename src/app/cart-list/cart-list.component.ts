import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from '../model/model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  totalPrice: string[];
  cartItems: ProductModel[];

  constructor(private currency: CurrencyPipe, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPriceArr();
  }

  onBuy(phoneNumber: string): void {
    if (phoneNumber === undefined || Number.isNaN(+phoneNumber) || Number.isInteger(+phoneNumber)) {
      alert('Некорректный номер. Попробуйте еще раз.');
    }
    else {
      this.cartService.makeOrder();
      alert('Наши специалисты свяжуться с вам в ближайшее время, для уточнения деталей Вашего заказа.');
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

}
