import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location, NgIf } from '@angular/common';

import { ProductsService } from '../../shared/services/products.service';
import { type Product } from '../../shared/models/product.model';
import { ProductFormComponent } from '../../shared/components/product-form/product-form.component';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    GoBackBtnComponent,
    ProductFormComponent,
    NgIf,
  ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);
  fb = inject(FormBuilder);

  productForm!: FormGroup;
  imageUrl: string = '';

  product!: Product;

  constructor() {
    let productId: number;
    this.route.params.pipe(takeUntilDestroyed()).subscribe((resp) => {
      const { id } = resp;
      productId = id;
    });
    this.productsService
      .getObservableProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.product = resp.filter((pr) => pr.id === +productId)[0];
      });
    this.productForm = this.fb.group({
      id: [this.product.id],
      name: [this.product.name],
      price: [this.product.price],
      obviously: [this.product.obviously],
      description: [this.product.description],
      photo: [this.product.photo],
      inStock: [this.product.inStock],
      shortDescription: [this.product.shortDescription],
      composition: this.fb.group({
        extract: [this.product.composition.extract],
        folicAcid: [this.product.composition.folicAcid],
        magnesium: [this.product.composition.magnesium],
        vitaminB1: [this.product.composition.vitaminB1],
        vitaminB12: [this.product.composition.vitaminB12],
        vitaminB6: [this.product.composition.vitaminB6],
      }),
      recommendations: [this.product.recommendations],
      symptoms: [this.product.symptoms],
      advantages: [this.product.advantages],
      clinicalExperience: [this.product.clinicalExperience],
      usageInstructions: [this.product.usageInstructions],
      warnings: [this.product.warnings],
      ageRestrictions: [this.product.ageRestrictions],
      packagingAndStorage: [this.product.packagingAndStorage],
      manufacturer: [this.product.manufacturer],
      productQuantity: [this.product.productQuantity],
      importer: [this.product.importer],
    });
  }

  onChangeProduct() {
    if (this.productForm.valid) {
      this.productsService.changeProductInfo(this.productForm.value);
      alert('Ви успішно змінили інформацію про товар 😊');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  resetSelection(): void {
    this.productForm.get('composition')?.reset();
  }
}
