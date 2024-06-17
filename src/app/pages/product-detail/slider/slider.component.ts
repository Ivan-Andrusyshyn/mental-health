import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { imgsProduct } from './img-list';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  slideIndex: number = 0;
  imgsProduct: any;

  constructor() {
    this.imgsProduct = imgsProduct;
  }

  prevSlide() {
    this.slideIndex =
      this.slideIndex === 0 ? this.imgsProduct.length - 1 : this.slideIndex - 1;
  }

  nextSlide() {
    this.slideIndex =
      this.slideIndex === this.imgsProduct.length - 1 ? 0 : this.slideIndex + 1;
  }
}
