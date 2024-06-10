import { inject, Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { type Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'chosenProducts';

@Injectable({
  providedIn: 'root',
})
export class ChosenProductsService {
  private ps = inject(ProductsService);

  private chosenProductsSubject: BehaviorSubject<Product[]> =
    new BehaviorSubject<Product[]>(this.loadFromLocalStorage());

  chosenProducts$ = this.chosenProductsSubject.asObservable();

  constructor() {}

  getChosenProducts() {
    return this.chosenProducts$;
  }

  chooseProduct(productId: number, quantity: number) {
    const currentProducts = this.chosenProductsSubject.value;
    const productToAdd = this.ps
      .getProducts()
      .find((item) => item.id === productId);

    if (productToAdd) {
      const existingProductIndex = currentProducts.findIndex(
        (item) => item.id === productId
      );

      if (existingProductIndex !== -1) {
        currentProducts[existingProductIndex].productQuantity = quantity;
      } else {
        currentProducts.push({
          ...productToAdd,
          productQuantity: quantity,
        });
      }

      this.chosenProductsSubject.next([...currentProducts]);
      this.saveToLocalStorage([...currentProducts]);

      this.ps.updateProductQuantity(productId, quantity);
    }
  }

  decrementProduct(productId: number) {
    const currentProducts = this.chosenProductsSubject.value;
    const existingProduct = currentProducts.find(
      (item) => item.id === productId
    );

    if (existingProduct && existingProduct.productQuantity > 1) {
      existingProduct.productQuantity -= 1;
      this.chosenProductsSubject.next([...currentProducts]);
      this.saveToLocalStorage([...currentProducts]);

      this.ps.updateProductQuantity(productId, existingProduct.productQuantity);
    } else {
      this.cancelChosenProduct(productId);
    }
  }

  cancelChosenProduct(productId: number) {
    const currentProducts = this.chosenProductsSubject.value;
    const updatedProducts = currentProducts.filter(
      (item) => item.id !== productId
    );

    this.chosenProductsSubject.next(updatedProducts);
    this.saveToLocalStorage(updatedProducts);

    this.ps.updateProductQuantity(productId, 0);
  }

  private saveToLocalStorage(products: Product[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  private loadFromLocalStorage(): Product[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
