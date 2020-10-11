import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProductModel } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor() { }

  products: Observable<ProductModel[]> = of([
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
      amount: 25,
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
  ]);

  cartItems: Observable<ProductModel[]> = of([
    {
      name: 'Запорожец стандарт',
      priceMin: 5000,
      priceMax: 6000,
      description: 'Нестареющая классика',
      amount: 1,
      currency: 'UAH',
    },
  ]);
}
