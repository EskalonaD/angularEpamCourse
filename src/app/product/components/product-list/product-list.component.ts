import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ProductModel } from '../../../model/model';
import { ProductService } from '../../services/product.service';

interface ProductItem extends ProductModel {
  isAvailable: boolean;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Observable<ProductItem[]>;

  constructor(private products: ProductService,
private cdr: ChangeDetectorRef,
    ) { }

  ngOnInit(): void {
    this.productList = this.products.getProducts().pipe(
      map(products =>  this.setAvailability(products)),
    );
  }

  onBuy(productName: string): void {
    this.productList = this.products.buyProduct(productName).pipe(
      // tap(x=> this.cdr.markForCheck()
      map(products => this.setAvailability(products.map(el => ({...el})))),
      
    );
  }

  private setAvailability(products: ProductModel[]): ProductItem[] {
    return products.map(product => {
      (product as ProductItem).isAvailable = Boolean(product.amount);
      return product as ProductItem;
    });
  }
}
