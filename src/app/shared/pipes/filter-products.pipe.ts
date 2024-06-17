import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterProducts',
  standalone: true,
  pure: false,
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string | null): Product[] {
    if (!products || !searchTerm) {
      return products;
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
