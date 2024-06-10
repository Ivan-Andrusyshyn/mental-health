import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-shop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-shop.component.html',
  styleUrls: ['./about-shop.component.css'],
})
export class AboutShopComponent {
  storeName: string = 'Дивовижний Магазин';
  location: string = '123 Головна вулиця, Будь-яке місто, США';
  contactNumbers: string[] = ['+1 (555) 123-4567', '+1 (555) 987-6543'];
  currentHours: string = 'Пн-Пт: 9:00 - 21:00, Сб-Нд: 10:00 - 18:00';
  history: string = `Заснований у 1990 році, Дивовижний Магазин надає якісні продукти
    та послуги нашій спільноті вже понад 30 років. Наше прагнення до досконалості та
    задоволення клієнтів зробило нас улюбленим місцем у цьому районі.`;
}
