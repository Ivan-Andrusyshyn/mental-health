import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
interface Section {
  id: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-about-shop',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-shop.component.html',
  styleUrls: ['./about-shop.component.css'],
})
export class AboutShopComponent {
  sections: Section[] = [
    {
      id: 1,
      title: 'Корисна інформація',
      description: 'Статті про ментальне здоров’я та поради як його покращити.',
    },
    {
      id: 2,
      title: 'Тестування',
      description:
        'Інструменти для оцінки вашого психічного стану, схвалені МОЗ України та ВООЗ.',
    },
    {
      id: 3,
      title: 'Магазин MH',
      description:
        'Препарати та ліки, що допомагають полегшити симптоми ментальних розладів.',
    },
    {
      id: 4,
      title: 'Щоденник MH',
      description:
        'Інструмент для кращого розуміння вашого стану, а також формування корисних звичок.',
    },
    {
      id: 5,
      title: 'Психологічна допомога',
      description: 'Контакти анонімної безоплатної допомоги від спеціалістів.',
    },
  ];
}
