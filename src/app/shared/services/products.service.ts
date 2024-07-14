import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { croxenInfo, productsOriginal } from '../../options/productsOriginal';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [];
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  products$ = this.productsSubject.asObservable();
  private localStorageKey = 'products';

  constructor() {
    this.loadProductsFromLocalStorage();
    if (this.products.length === 0) {
      this.makeProducts();
    }
  }

  private loadProductsFromLocalStorage() {
    const storedProducts = localStorage.getItem(this.localStorageKey);
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
      this.productsSubject.next(this.products);
    }
  }

  private saveProductsToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.products));
  }

  private makeProducts() {
    const products: Product[] = [];
    const Obviously = (i: number) => Math.ceil(Math.random() + 2 + i);

    for (let i = 0; i <= productsOriginal.length - 1; ++i) {
      products.push({
        id: productsOriginal[i].id,
        name: productsOriginal[i].name,
        obviously: productsOriginal[i].obviously,
        description: productsOriginal[i].description,
        shortDescription: productsOriginal[i].shortDescription,
        inStock: productsOriginal[i].inStock,
        photo: productsOriginal[i].photo,
        composition: croxenInfo.composition,
        recommendations: croxenInfo.recommendations,
        symptoms: croxenInfo.symptoms,
        advantages: croxenInfo.advantages,
        clinicalExperience: croxenInfo.clinicalExperience,
        usageInstructions: croxenInfo.usageInstructions,
        warnings: croxenInfo.warnings,
        ageRestrictions: croxenInfo.ageRestrictions,
        packagingAndStorage: croxenInfo.packagingAndStorage,
        manufacturer: croxenInfo.manufacturer,
        importer: croxenInfo.importer,
        price: productsOriginal[i].price,
        productQuantity: 0,
      });
    }

    this.products = products;
    this.productsSubject.next(this.products);
    this.saveProductsToLocalStorage();
  }

  getProducts() {
    return this.products;
  }

  getObservableProducts() {
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
