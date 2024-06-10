import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ProductListComponent } from '../../shared/components/product-list/product-list.component';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
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
    this.productsService.getObservableProducts().subscribe((resp) => {
      this.products = resp.slice();
      this.filteredProducts = resp.slice();
      this.updatePaginatedProducts();
    });

    this.paginatorIntl.itemsPerPageLabel = 'Товарів на сторінці';
    this.searchControl.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.filterProducts(searchTerm || '');
      });
  }

  ngOnInit() {
    this.updatePaginatedProducts();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }

  filterProducts(searchTerm: string) {
    if (searchTerm.trim()) {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products.slice();
    }
    this.currentPage = 0;

    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }
}
