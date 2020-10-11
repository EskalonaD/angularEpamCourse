import { Injectable } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private storage: DataStorageService) { }

  getProducts() {
    return this.storage.products;
  }
}
