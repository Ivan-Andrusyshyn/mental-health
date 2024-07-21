import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { EditLinkComponent } from '../../shared/components/buttons/edit-link/edit-link.component';
import { BuyBtnComponent } from '../../shared/components/buttons/buy-btn/buy-btn.component';
import { AuthService } from '../../shared/services/auth.service';
import { ProductMoreInfoComponent } from '../../shared/components/products/product-more-info/product-more-info.component';
import { GoBackBtnComponent } from '../../shared/components/buttons/go-back-btn/go-back-btn.component';
import { TestsGoBackBtnComponent } from '../../shared/components/online-tests/tests-go-back-btn/tests-go-back-btn.component';
import { ProductSliderComponent } from '../../shared/components/products/product-slider/product-slider.component';
interface Slider {
  image: string;
}
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NgIf,
    ProductSliderComponent,
    EditLinkComponent,
    GoBackBtnComponent,
    ProductMoreInfoComponent,
    BuyBtnComponent,
    TestsGoBackBtnComponent,
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
  sliderImages!: Slider[];
  lastPath: string = 'products';

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

        this.sliderImages = this.product.slider_img;
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
