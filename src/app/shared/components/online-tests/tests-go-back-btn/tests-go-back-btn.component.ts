import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests-go-back-btn',
  standalone: true,
  imports: [],
  templateUrl: './tests-go-back-btn.component.html',
  styleUrl: './tests-go-back-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsGoBackBtnComponent {
  @Input() lastPath!: string;

  private router = inject(Router);

  goBack() {
    this.router.navigate([this.lastPath]);
  }
}
