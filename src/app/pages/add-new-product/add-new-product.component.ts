import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { ProductFormComponent } from '../../shared/components/products/product-form/product-form.component';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      productQuantity: [0],
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      prompt('Form is invalid');
    }
  }
}
