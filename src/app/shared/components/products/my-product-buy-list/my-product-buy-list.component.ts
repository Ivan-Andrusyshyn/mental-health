import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgFor } from '@angular/common';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-my-product-buy-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './my-product-buy-list.component.html',
  styleUrl: './my-product-buy-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProductBuyListComponent {
  @Input() productList: Product[] = [];
  @Output() removeProduct = new EventEmitter<Product>();

  onRemoveProduct(product: Product) {
    this.removeProduct.emit(product);
  }
}
