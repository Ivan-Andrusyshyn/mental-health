import { Component, Inject, inject } from '@angular/core';
import { ChosenProductsService } from '../../shared/services/chosenProducts.service';
import { Product } from '../../shared/models/product.model';
import { MyProductListComponent } from '../../shared/components/my-product-list/my-product-list.component';
import { EmailFormComponent } from '../../shared/email-form/email-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TotalAmountComponent } from './total-amount/total-amount.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [
    MyProductListComponent,
    MatDialogModule,
    MatButtonModule,
    EmailFormComponent,
    TotalAmountComponent,
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
    this.cpService.getChosenProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  openDialog(): void {
    this.dialogRef.open(EmailFormComponent, {
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
