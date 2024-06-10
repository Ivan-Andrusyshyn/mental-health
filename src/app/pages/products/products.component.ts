import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../../shared/components/product-list/product-list.component';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductListComponent, MatPaginatorModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productsService = inject(ProductsService);

  products: Product[] = [];
  paginatedProducts: Product[] = [];
  pageSize = 10;
  currentPage = 0;

  constructor(private paginatorIntl: MatPaginatorIntl) {
    this.productsService.getObservableProducts().subscribe((resp) => {
      this.products = resp;
      this.updatePaginatedProducts();
    });
    this.paginatorIntl.itemsPerPageLabel = 'Товарів на сторінці';
  }

  ngOnInit() {
    this.updatePaginatedProducts();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }
}
