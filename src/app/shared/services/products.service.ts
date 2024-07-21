import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

import { STORAGE_PRODUCTS } from '../../configs/storage-keys';
import { StorageService } from './storage.service';
import { product_list } from '../../options/productsOriginal';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private storageService = inject(StorageService);

  private products: Product[] = [];
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  products$ = this.productsSubject.asObservable();

  constructor() {
    this.loadProductsFromLocalStorage();

    if (this.products.length === 0) {
      this.makeProducts();
    }
  }

  private loadProductsFromLocalStorage() {
    this.products =
      JSON.parse(this.storageService.getData(STORAGE_PRODUCTS)) || [];

    this.productsSubject.next(this.products);
  }

  private saveProductsToLocalStorage() {
    this.storageService.setData(
      STORAGE_PRODUCTS,
      JSON.stringify(this.products)
    );
  }

  private makeProducts() {
    this.products = product_list;

    this.productsSubject.next(this.products);
    this.saveProductsToLocalStorage();
  }

  getProducts(): Product[] {
    return this.products;
  }

  getObservableProducts(): Observable<Product[]> {
    return this.products$;
  }

  changeProductInfo(product: Product) {
    const currentProducts = this.productsSubject.value;

    const itemIndex = currentProducts.findIndex(
      (item) => item.id === product.id
    );

    if (itemIndex === -1) return;

    currentProducts[itemIndex] = product;
    this.productsSubject.next([...currentProducts]);
    this.saveProductsToLocalStorage();
  }

  updateProductQuantity(productId: number, quantity: number) {
    const currentProducts = this.productsSubject.value;
    const itemIndex = currentProducts.findIndex(
      (item) => item.id === productId
    );

    if (itemIndex !== -1) {
      currentProducts[itemIndex].productQuantity = quantity;
      this.productsSubject.next([...currentProducts]);
      this.saveProductsToLocalStorage();
    }
  }

  addProduct(newProduct: Product) {
    newProduct.id = this.products.length
      ? Math.max(...this.products.map((p) => p.id)) + 1
      : 0;
    const updatedProducts = [newProduct, ...this.products];
    this.productsSubject.next(updatedProducts);
    this.products = updatedProducts;
    this.saveProductsToLocalStorage();
  }

  removeProduct(productId: number) {
    const updatedProducts = this.products.filter(
      (product) => product.id !== productId
    );
    this.products = updatedProducts;
    this.productsSubject.next(this.products);
    this.saveProductsToLocalStorage();
  }
}
