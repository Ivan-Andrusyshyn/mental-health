import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { type Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}
