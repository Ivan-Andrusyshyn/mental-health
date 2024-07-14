import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

import { ChosenProductsService } from '../../../services/chosenProducts.service';
import { Product } from '../../../models/product.model';
import { TotalAmountComponent } from '../total-amount/total-amount.component';

import { MyProductBuyListComponent } from '../my-product-buy-list/my-product-buy-list.component';

@Component({
  selector: 'app-my-products-modal',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgClass,
    MyProductBuyListComponent,
    ReactiveFormsModule,
    TotalAmountComponent,
  ],
  templateUrl: './my-products-modal.component.html',
  styleUrls: ['./my-products-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProductsModalComponent implements OnInit {
  productList: Product[] = [];
  myProductsForm!: FormGroup;
  isLoading = signal<boolean>(false);
  submitSuccess = signal<boolean>(false);
  submitError = signal<boolean>(false);

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  public dialogRef = inject(MatDialogRef);

  private cp = inject(ChosenProductsService);
  constructor() {
    this.cp
      .getChosenProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.productList = resp;
      });
  }
  ngOnInit(): void {
    this.myProductsForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      text: [''],
    });
  }
  removeProduct(product: Product) {
    this.cp.cancelChosenProduct(product.id);
  }

  get calculateTotalAmount(): number {
    return this.productList.reduce(
      (sum, product) => sum + product.price * product.productQuantity,
      0
    );
  }

  onSubmit(): void {
    if (this.myProductsForm.valid) {
      this.isLoading.set(true);
      const formattedProductList = this.productList.map((product) => ({
        name: product.name,
        id: product.id,
        quantity: product.productQuantity,
        price: product.price,
        totalPrice: product.price * product.productQuantity,
      }));
      const formData = {
        name: this.myProductsForm.value.name,
        email: this.myProductsForm.value.email,
        phoneNumber: this.myProductsForm.value.phoneNumber,
        text: this.myProductsForm.value.text,
        totalSum: this.calculateTotalAmount,
        productList: formattedProductList,
      };

      this.http.post('https://submit-form.com/IWivaiDXn', formData).subscribe(
        (response) => {
          this.submitSuccess.set(true);
          console.log('Form submitted successfully', response);
          this.isLoading.set(false);
          this.submitError.set(false);
          this.myProductsForm.reset();
          console.log(this.submitSuccess());
        },
        (error) => {
          console.error('Error submitting form', error);
          this.isLoading.set(false);
          this.submitSuccess.set(false);
          this.submitError.set(true);
        }
      );
    }
  }
}
