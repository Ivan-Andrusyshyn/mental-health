import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  Input,
} from '@angular/core';
import { Product } from '../models/product.model';
import { NgFor } from '@angular/common';
import { ChosenProductsService } from '../services/chosenProducts.service';
import { TotalAmountComponent } from '../components/products/total-amount/total-amount.component';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [NgFor, TotalAmountComponent],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailFormComponent {
  productList: Product[] = [];

  private cp = inject(ChosenProductsService);
  constructor() {
    this.cp.getChosenProducts().subscribe((resp) => {
      this.productList = resp;
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
}
