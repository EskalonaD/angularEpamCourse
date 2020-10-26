import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ProductModel } from '../../../model/model';

@Component({
  selector: 'app-product',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnChanges{
  @Input() name: Pick<ProductModel, 'name'>;
  @Input() description: Pick<ProductModel, 'description'>;
  @Input() currency: Pick<ProductModel, 'currency'>;
  @Input() priceMin: Pick<ProductModel, 'priceMin'>;
  @Input() priceMax: Pick<ProductModel, 'priceMax'>;
  @Input() isAvailable: boolean;

  @Output() buy: EventEmitter<any> = new EventEmitter();

  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;

  @HostListener('click')
  onClick() {
    this.wrapper.nativeElement.style.border = '3px solid blue';
    setTimeout(() => this.wrapper.nativeElement.style.border = '3px solid black', 1000)
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
