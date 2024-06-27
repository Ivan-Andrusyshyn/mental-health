import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MyDiaryService } from '../../../shared/services/my-diary.service';
import { DiaryEntry } from '../../../shared/models/diary-note.model';
import { filter, map, switchMap } from 'rxjs/operators';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diary-note',
  standalone: true,
  imports: [NgIf, AsyncPipe, DatePipe],
  templateUrl: './diary-note.component.html',
  styleUrls: ['./diary-note.component.css'],
})
export class DiaryNoteComponent {
  private route = inject(ActivatedRoute);
  private myDiary = inject(MyDiaryService);

  selectedNote: DiaryEntry | null = null;
  loading$: Observable<boolean>;
  constructor() {
    this.loading$ = this.myDiary.isLoading();

    this.route.params
      .pipe(
        takeUntilDestroyed(),
        switchMap((params) => {
          const noteId = params['id'];
          return this.myDiary.getEntries().pipe(
            filter((entries) => !!entries.length),
            map((entries) => entries.find((entry) => entry.id === noteId))
          );
        })
      )
      .subscribe((note) => {
        if (!note) return;
        this.selectedNote = note;
      });
  }
  deleteEntry(id: string = '') {
    this.myDiary.deleteEntry(id);
    this.selectedNote = null;
  }
}
