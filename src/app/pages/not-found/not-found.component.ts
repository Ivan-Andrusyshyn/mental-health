import { Component } from '@angular/core';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [GoBackBtnComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  img_notFound =
    'https://tse2.mm.bing.net/th?id=OIP.Jb4XrrIxatYfB2DQxV0TngHaFs&pid=Api&P=0&h=480';
}
