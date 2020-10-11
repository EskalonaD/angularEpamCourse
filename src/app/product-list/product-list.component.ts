import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[];

  constructor(private products: ProductService) { }

  ngOnInit(): void {
    console.log(' list', this.productList);
    this.productList = this.filterEmpty(this.products.getProducts() || []);
    console.log(' list', this.productList);
  }

  filterEmpty(arr: ProductModel[]): ProductModel[] {
    return arr.filter(product => product.amount !== 0);
  }
}