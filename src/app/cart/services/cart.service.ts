import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Observable, of } from 'rxjs';

import { DataStorageService } from './../../api-facade/data-storage.service';
import { ProductModel } from './../../model/model';

interface PriceMap {
  [currency: string]: {
    priceMin: number;
    priceMax: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private currency: CurrencyPipe, private storage: DataStorageService) { }

  getCartItems(): Observable<ProductModel[]> {
    return this.storage.cartItems;
  }

  makeOrder(arr: ProductModel[]): void {
    this.createOrder(arr);
    this.deleteCartItems();
  }

  clearCart(): void {
    this.deleteCartItems();
  }

  getTotalPriceArr(cartItems: ProductModel[]): string[] {
    const priceMap: PriceMap = cartItems.reduce((acc: object, cartItem) => {
      if (!acc[cartItem.currency]) {
        acc[cartItem.currency] = {
          priceMax: 0,
          priceMin: 0,
        };
      }
      acc[cartItem.currency].priceMax += cartItem.priceMax * cartItem.amount;
      acc[cartItem.currency].priceMin += cartItem.priceMin * cartItem.amount;
      return acc;
    }, {});

    const priceArr = Object.entries(priceMap).map(([currency, priceObj]) => {
      const currencyCode = currency === 'undefined' ? undefined : currency;
      const minPrice = this.currency.transform(priceObj.priceMin, currencyCode, 'symbol', '1.0-0');
      const maxPrice = this.currency.transform(priceObj.priceMax, currencyCode, 'symbol', '1.0-0');

      return `${minPrice} - ${maxPrice}`;
    });

    return priceArr;
  }

  private deleteCartItems(): void {
    this.storage.cartItems = of([]);
  }

  private createOrder(products: ProductModel[]): void {
    // TODO: Implement after API will be created
  }
}
