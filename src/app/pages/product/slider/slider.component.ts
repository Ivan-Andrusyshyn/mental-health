import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  slideIndex: number = 0;

  imgsProduct = [
    {
      image: '../../../assets/product-main-img.jpg',
    },
    {
      image: '../../../assets/1703619922.0556.jpg',
    },
    {
      image: '../../../assets/1703619922.202.jpg',
    },
    {
      image: '../../../assets/1703619922.1739.jpg',
    },
  ];

  prevSlide() {
    this.slideIndex =
      this.slideIndex === 0 ? this.imgsProduct.length - 1 : this.slideIndex - 1;
  }

  nextSlide() {
    this.slideIndex =
      this.slideIndex === this.imgsProduct.length - 1 ? 0 : this.slideIndex + 1;
  }
}
