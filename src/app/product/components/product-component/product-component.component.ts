import { Component, Input } from '@angular/core';

import { ProductModel } from '../../../model/model';

@Component({
  selector: 'app-product',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponent {
  @Input() product: ProductModel;

  onBuy(): any {
    console.log('Товар куплен');
  }
}
// тут надо поправить название - убрать суффикс - component
