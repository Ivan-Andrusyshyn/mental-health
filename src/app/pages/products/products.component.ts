import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from '../../shared/components/products/product-list/product-list.component';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';
import { FilterProductsPipe } from '../../shared/pipes/filter-products.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductListComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    NgIf,
    FilterProductsPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  productsService = inject(ProductsService);

  products: Product[] = [];
  paginatedProducts: Product[] = [];
  pageSize = 10;
  currentPage = 0;
  filteredProducts: Product[] = [];

  searchControl = new FormControl('');

  constructor(private paginatorIntl: MatPaginatorIntl) {
    this.productsService
      .getObservableProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.products = resp.slice();
        this.filteredProducts = resp.slice();
        this.updatePaginatedProducts();
      });

    this.paginatorIntl.itemsPerPageLabel = 'Товарів на сторінці';
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }
}
