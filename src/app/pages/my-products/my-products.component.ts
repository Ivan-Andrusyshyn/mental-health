import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ChosenProductsService } from '../../shared/services/chosenProducts.service';
import { Product } from '../../shared/models/product.model';
import { MyProductListComponent } from '../../shared/components/products/my-product-list/my-product-list.component';
import { TotalAmountComponent } from '../../shared/components/products/total-amount/total-amount.component';
import { MyProductsModalComponent } from '../../shared/components/products/my-products-modal/my-products-modal.component';

@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [
    MyProductListComponent,
    MatDialogModule,
    MatButtonModule,
    TotalAmountComponent,
    MyProductListComponent,
    MyProductsModalComponent,
  ],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css',
})
export class MyProductsComponent {
  private cpService = inject(ChosenProductsService);

  private dialogRef = inject(MatDialog);

  products: Product[] = [];
  chosenProductPage: string = 'chosenProductPage';
  constructor() {
    this.cpService
      .getChosenProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.products = resp;
      });
  }
  openDialog(): void {
    this.dialogRef.open(MyProductsModalComponent, {
      width: '500px',
      height: '670px',
    });
  }

  get calculateTotalAmount(): number {
    return this.products.reduce(
      (sum, product) => sum + product.price * product.productQuantity,
      0
    );
  }
}
