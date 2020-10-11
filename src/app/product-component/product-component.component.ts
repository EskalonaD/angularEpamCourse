import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../model/model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponent {
  @Input() product: ProductModel;

  onBuy() {
    console.log('Товар куплен');
  }
}
