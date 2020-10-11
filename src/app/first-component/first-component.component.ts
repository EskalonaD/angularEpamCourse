import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

enum ProductCategory {
  Cars = 'Машины',
  Courses = 'Онлайн Курсы',
  Appartments = 'Квартиры',
  Trends = 'Популярные товары',
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: typeof ProductCategory;
  isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Shop';
    this.description = 'Лучший магазин для всех';
    this.category = ProductCategory;
    this.isAvailable = false;

  }

  checkIfContentValid(category: ProductCategory): void {
    this.isAvailable = category === ProductCategory.Cars;
  }

}
