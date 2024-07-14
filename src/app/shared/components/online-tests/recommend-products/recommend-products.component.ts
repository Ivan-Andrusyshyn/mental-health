import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Product } from '../../../models/product.model';
import { TestsService } from '../../../services/tests.service';
import { ProductItemComponent } from '../../products/product-item/product-item.component';

@Component({
  selector: 'app-recommend-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './recommend-products.component.html',
  styleUrl: './recommend-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendProductsComponent {
  private testService = inject(TestsService);
  recommendList: Product[] = [];
  constructor() {
    this.testService.recomendProducts.asObservable().subscribe((items) => {
      this.recommendList = items.slice();
    });
  }
}
