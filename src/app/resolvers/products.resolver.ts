import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ProductsService } from '../shared/services/products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<any> {
  constructor(private productsService: ProductsService) {}

  resolve(): Observable<any> {
    return this.productsService.getObservableProducts();
  }
}
