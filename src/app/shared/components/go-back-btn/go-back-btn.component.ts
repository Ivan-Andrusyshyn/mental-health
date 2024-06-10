import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-go-back-btn',
  standalone: true,
  imports: [],
  templateUrl: './go-back-btn.component.html',
  styleUrl: './go-back-btn.component.css',
})
export class GoBackBtnComponent {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
``;
