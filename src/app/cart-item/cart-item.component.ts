import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../model/model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: ProductModel;
  totalPrice: string;

  constructor(private currency: CurrencyPipe) { }

  ngOnInit(): void {
    this.totalPrice = this.getTotalPrice(this.cartItem.priceMin, this.cartItem.priceMax, this.cartItem.amount);
  }

  getTotalPrice(priceMin: number, priceMax: number, amount: number): string {
    const showedPriceMax = this.currency.transform(priceMax * amount, this.cartItem.currency, 'symbol', '1.0-0');
    const showedPriceMin = this.currency.transform(priceMin * amount, this.cartItem.currency, 'symbol', '1.0-0');
    return `${showedPriceMin} - ${showedPriceMax}`;
  }
}
