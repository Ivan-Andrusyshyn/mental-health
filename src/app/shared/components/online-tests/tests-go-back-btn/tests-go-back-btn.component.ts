import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tests-go-back-btn',
  standalone: true,
  imports: [],
  templateUrl: './tests-go-back-btn.component.html',
  styleUrl: './tests-go-back-btn.component.css',
})
export class TestsGoBackBtnComponent {
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
