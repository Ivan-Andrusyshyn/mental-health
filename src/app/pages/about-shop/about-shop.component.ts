import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AboutShop, aboutShop } from './about-shop-info';

@Component({
  selector: 'app-about-shop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-shop.component.html',
  styleUrls: ['./about-shop.component.css'],
})
export class AboutShopComponent {
  aboutShop: AboutShop[] = aboutShop;
}
