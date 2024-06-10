import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-more-info',
  standalone: true,
  imports: [MatExpansionModule, NgFor, MatButtonModule],
  templateUrl: './product-more-info.component.html',
  styleUrl: './product-more-info.component.css',
})
export class ProductMoreInfoComponent {
  @Input() product!: Product;
  constructor() {
    console.log(this.product);
  }
}
