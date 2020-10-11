import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DataStorageService } from '../../api-facade/data-storage.service';
import { ProductModel } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private storage: DataStorageService) { }

  getProducts(): Observable<ProductModel[]> {
    return this.storage.products;
  }
}
