import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { ProductModel } from '../../../model/model';

@Component({
  selector: 'app-product',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponent implements OnChanges{
  @Input() name: Pick<ProductModel, 'name'>;
  @Input() description: Pick<ProductModel, 'description'>;
  @Input() currency: Pick<ProductModel, 'currency'>;
  @Input() priceMin: Pick<ProductModel, 'priceMin'>;
  @Input() priceMax: Pick<ProductModel, 'priceMax'>;
  @Input() isAvailable: boolean;

  @Output() buy: EventEmitter<any> = new EventEmitter();

  private inputs = {

  }

  ngOnChanges(changes: SimpleChanges) {
    const keys = Object.keys(changes);
    keys.forEach(inputName => {
      this[inputName] = changes?.[inputName]?.currentValue;
    })
  }


  onBuy(): any {
    this.buy.emit(this.name);
  }
}
