import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { EditLinkComponent } from '../../shared/components/edit-link/edit-link.component';
import { BuyBtnComponent } from '../../shared/components/buy-btn/buy-btn.component';
import { AuthService } from '../../shared/services/auth.service';
import { ProductMoreInfoComponent } from '../../shared/components/product-more-info/product-more-info.component';
import { SliderComponent } from './slider/slider.component';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NgIf,
    SliderComponent,
    EditLinkComponent,
    GoBackBtnComponent,
    ProductMoreInfoComponent,
    BuyBtnComponent,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);

  private authService = inject(AuthService);

  isAuthUser: boolean = false;
  isAuthAdmin: boolean = false;

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
    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => {
        this.isAuthUser = role;
      });
    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => {
        this.isAuthAdmin = role;
      });
  }
}
