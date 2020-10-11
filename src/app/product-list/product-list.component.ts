import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductModel } from '../model/model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Observable<ProductModel[]>;

  constructor(private products: ProductService) { }

  ngOnInit(): void {
    // this.products.getProducts().pipe(
    //   tap(),
    //   ).subscribe({next: products => this.productList = this.filterEmpty(products || [])});

      this.productList = this.products.getProducts().pipe(
        map( products => this.filterEmpty(products || []))
      )
  }

  filterEmpty(arr: ProductModel[]): ProductModel[] {
    return arr.filter(product => product.amount !== 0);
  }
}
