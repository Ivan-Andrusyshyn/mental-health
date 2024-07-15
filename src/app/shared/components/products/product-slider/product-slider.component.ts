import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

interface Slider {
  image: string;
}
@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent implements OnInit {
  @Input() sliderImages!: Slider[];
  slideIndex: number = 0;
  img_slides!: Slider[];
  constructor() {}

  ngOnInit(): void {
    this.img_slides = this.sliderImages;
  }
  prevSlide() {
    this.slideIndex =
      this.slideIndex === 0 ? this.img_slides.length - 1 : this.slideIndex - 1;
  }

  nextSlide() {
    this.slideIndex =
      this.slideIndex === this.img_slides.length - 1 ? 0 : this.slideIndex + 1;
  }
}
