import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back-btn',
  standalone: true,
  imports: [],
  templateUrl: './go-back-btn.component.html',
  styleUrl: './go-back-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoBackBtnComponent {
  @Input() lastPath!: string;

  private router = inject(Router);

  goBack() {
    this.router.navigate([this.lastPath]);
  }
}
