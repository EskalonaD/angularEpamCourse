import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductModel } from '../../../model/model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Observable<ProductModel[]>;

  // я бы именовал название сервиса так же как и сам класс, только начинал с нижнего регистра
  // на мой взгляд, такой код является более читаемым
  constructor(private products: ProductService) { }

  ngOnInit(): void {
      this.productList = this.products.getProducts().pipe(
        map( products => this.filterEmpty(products || [])),
      );
  }

  private filterEmpty(arr: ProductModel[]): ProductModel[] {
    return arr.filter(product => product.amount !== 0);
  }
}
