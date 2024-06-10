import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';
import { EditLinkComponent } from '../../shared/components/edit-link/edit-link.component';
import { NgIf } from '@angular/common';
import { BuyBtnComponent } from '../../shared/components/buy-btn/buy-btn.component';
import { AuthService } from '../../shared/services/auth.service';
import { ProductMoreInfoComponent } from '../../shared/components/product-more-info/product-more-info.component';
import { SliderComponent } from './slider/slider.component';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgIf,
    SliderComponent,
    EditLinkComponent,
    GoBackBtnComponent,
    ProductMoreInfoComponent,
    BuyBtnComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);

  private authService = inject(AuthService);

  product!: Product;

  constructor() {
    this.route.params.subscribe((resp) => {
      const { id } = resp;
      const products = this.productsService.getProducts();
      this.product = products.filter((pr) => pr.id === +id)[0];
    });
  }

  get authAdmin() {
    return this.authService.getIsAuthAdmin();
  }
  get authUser() {
    return this.authService.getIsAuthUser();
  }
}
