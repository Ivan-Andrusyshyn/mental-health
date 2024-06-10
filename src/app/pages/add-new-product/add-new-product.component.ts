import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { ProductFormComponent } from '../../shared/components/product-form/product-form.component';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent {
  productsService = inject(ProductsService);

  productForm: FormGroup;
  imageUrl: string = '';
  id: number;

  constructor(private fb: FormBuilder) {
    this.id = this.productsService.getProducts().length + 1;
    this.productForm = this.fb.group({
      id: this.id,
      name: [''],
      price: [0],
      obviously: [0],
      description: [''],
      photo: [''],
      inStock: [false],
      shortDescription: [''],
      composition: this.fb.group({
        extract: [''],
        folicAcid: [''],
        magnesium: [''],
        vitaminB1: [''],
        vitaminB12: [''],
        vitaminB6: [''],
      }),
      recommendations: [''],
      symptoms: [''],
      advantages: [''],
      clinicalExperience: [''],
      usageInstructions: [''],
      warnings: [''],
      ageRestrictions: [''],
      packagingAndStorage: [''],
      manufacturer: [''],
      importer: [''],
    });
  }
  resetSelection(): void {
    this.productForm.get('composition')?.reset();
  }
  onSubmit() {
    if (this.productForm.valid) {
      this.productsService.addProduct(this.productForm.value);
      this.productForm.reset();
      alert('Ви успішно додали новий товар 😊');
    } else {
      prompt('Form is invalid');
    }
  }
}
