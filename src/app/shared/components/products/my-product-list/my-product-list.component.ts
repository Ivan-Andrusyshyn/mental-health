import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { BuyBtnComponent } from '../../buttons/buy-btn/buy-btn.component';
import { CancelBtnComponent } from '../../buttons/cancel-btn/cancel-btn.component';
import { NgIf } from '@angular/common';
import { ChosenProductsService } from '../../../services/chosenProducts.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-product-list',
  standalone: true,
  imports: [RouterLink, NgIf, BuyBtnComponent, CancelBtnComponent],
  templateUrl: './my-product-list.component.html',
  styleUrl: './my-product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProductListComponent {
  @Input() products!: Product[];
  cpService = inject(ChosenProductsService);
  isMyProductPage: boolean = true;
  constructor() {
    this.cpService
      .getChosenProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.products = resp;
      });
  }
}
