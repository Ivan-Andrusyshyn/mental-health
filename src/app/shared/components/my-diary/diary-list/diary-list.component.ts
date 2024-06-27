import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MyDiaryService } from '../../../services/my-diary.service';
import { Observable } from 'rxjs';
import { DiaryItemComponent } from '../diary-item/diary-item.component';
import { DiaryEntry } from '../../../models/diary-note.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-diary-list',
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    NgFor,
    AsyncPipe,
    DiaryItemComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './diary-list.component.html',
  styleUrl: './diary-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryListComponent {
  private myDiary = inject(MyDiaryService);

  entries$!: Observable<DiaryEntry[]>;
  loading$!: Observable<boolean>;
  currentIndex = 0;
  totalLength!: number;

  constructor() {
    this.entries$ = this.myDiary.getEntries();
    this.loading$ = this.myDiary.isLoading();

    this.entries$.subscribe((entries: string | any[]) => {
      this.totalLength = entries.length - 1;
    });
  }
  next() {
    if (this.currentIndex < this.totalLength) {
      this.currentIndex = this.currentIndex + 2;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 2;
    }
  }
}
