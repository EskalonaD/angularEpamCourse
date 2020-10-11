import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent {
  onBuy() {
    console.log('Товар куплен');
  }
}
