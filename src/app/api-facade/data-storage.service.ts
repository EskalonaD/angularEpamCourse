import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor() { }

  products: ProductModel[] = [
    {
      name: 'Запорожец стандарт',
      priceMin: 5000,
      priceMax: 6000,
      description: 'Нестареющая классика',
      amount: 100500,
      currency: 'UAH',
    },
    {
      name: 'Запорожец кабриолет',
      priceMin: 50000,
      priceMax: 150000,
      description: 'Пользоваться любимым автомобилем стало еще приятнее.',
      amount: 0,
      currency: 'UAH',
    },
    {
      name: 'Запорожец 4х4 лимузин',
      priceMin: 100000,
      priceMax: 250000,
      description: 'Хит сезона',
      amount: 1,
    },
    {
      name: 'Тесла Model S',
      priceMin: 50000,
      priceMax: 150000,
      amount: 25,
    },
  ];

  cartItems: ProductModel[] = [
    {
      name: 'Запорожец стандарт',
      priceMin: 5000,
      priceMax: 6000,
      description: 'Нестареющая классика',
      amount: 2,
      currency: 'UAH',
    },
    {
      name: 'Запорожец кабриолет',
      priceMin: 50000,
      priceMax: 150000,
      description: 'Пользоваться любимым автомобилем стало еще приятнее.',
      amount: 1,
      currency: 'UAH',
    },
    {
      name: 'Тесла Model S',
      priceMin: 50000,
      priceMax: 150000,
      amount: 1,
    },
  ];

  getProducts(): Observable<ProductModel[]> {
    return of([...this.products.map(el => ({...el}))]);
  }

  getCartItems(): Observable<ProductModel[]> {
    return of([...this.cartItems.map(el => ({...el}))]);
  }

  deleteCartItems(): Observable<ProductModel[]> {
    this.cartItems = [];
    return this.getCartItems();
  }

  moveProductToCart(productName: string): Observable<ProductModel[]> {
    let tempProduct: ProductModel;
    for (const product of this.products) {
        if (product.name === productName) {
          product.amount -= 1;
          tempProduct = product;
          break;
        }
        else if (product === this.products[this.products.length - 1]) {
          throw new Error('wrong product was bought');
        }
      }

    for (const item of this.cartItems) {
        if (item.name === productName) {
          ++item.amount;
          break;
        }
        else if (item === this.cartItems[this.cartItems.length - 1]) {
          this.cartItems.push({...tempProduct});
        }
      }
    return this.getProducts();
  }
}
