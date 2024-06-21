import { Component, inject, Input } from '@angular/core';
import { EditLinkComponent } from '../edit-link/edit-link.component';
import { Router, RouterLink } from '@angular/router';
import { BuyBtnComponent } from '../buy-btn/buy-btn.component';
import { NgIf } from '@angular/common';
import { type ChosenProducts, Product } from '../../models/product.model';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink, NgIf, EditLinkComponent, BuyBtnComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;

  private router = inject(Router);
  private authService = inject(AuthService);
  private productService = inject(ProductsService);

  currentPageProduct: boolean = true;
  chosenProduct: boolean = false;

  get authUser() {
    return this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => role);
  }
  get authAdmin() {
    return this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => role);
  }
  constructor() {
    if (this.router.url === '/products') {
      this.currentPageProduct = true;
    } else {
      this.currentPageProduct = false;
    }
  }

  removeProduct() {
    this.productService.removeProduct(this.product.id);
  }
}
