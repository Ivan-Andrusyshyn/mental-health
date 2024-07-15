import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

import { DiaryListComponent } from '../../shared/components/my-diary/diary-list/diary-list.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-diary',
  standalone: true,
  imports: [DiaryListComponent, NgIf, AsyncPipe, RouterOutlet, RouterLink],
  templateUrl: './my-diary.component.html',
  styleUrl: './my-diary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDiaryComponent {
  private router = inject(Router);
  isDiaryUrl: boolean = false;

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe(() => {
      const currentUrl = this.router.url;
      this.isDiaryUrl = currentUrl === '/my-diary';
    });
  }
}
