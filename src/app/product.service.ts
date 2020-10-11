import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { ProductModel } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private storage: DataStorageService) { }

  getProducts(): ProductModel[] {
    return this.storage.products;
  }
}
