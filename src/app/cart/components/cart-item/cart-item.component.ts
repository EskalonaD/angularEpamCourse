import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ProductModel } from '../../../model/model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: ProductModel;

  totalPrice: string;

  constructor(private currency: CurrencyPipe) { }

  ngOnInit(): void {
    this.totalPrice = this.getTotalPrice(this.cartItem.priceMin, this.cartItem.priceMax);
  }

  getTotalPrice(priceMin: number, priceMax: number): string {
    const showedPriceMax = this.currency.transform(priceMax, this.cartItem.currency, 'symbol', '1.0-0');
    const showedPriceMin = this.currency.transform(priceMin, this.cartItem.currency, 'symbol', '1.0-0');
    return `${showedPriceMin} - ${showedPriceMax}`;
  }
}
