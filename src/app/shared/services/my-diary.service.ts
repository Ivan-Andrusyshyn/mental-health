import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { DiaryEntry } from '../models/diary-note.model';

@Injectable({
  providedIn: 'root',
})
export class MyDiaryService {
  private afs = inject(AngularFirestore);
  private loading$ = new BehaviorSubject<boolean>(false);
  private diaryCollection = this.afs.collection<DiaryEntry>('journalEntries');

  getEntries(): Observable<DiaryEntry[]> {
    this.loading$.next(true);
    return this.diaryCollection.snapshotChanges().pipe(
      map((actions) => {
        const array = actions.map((a) => {
          const data = a.payload.doc.data() as DiaryEntry;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
        this.loading$.next(false);
        return array;
      }),
      catchError((error) => {
        this.loading$.next(false);
        return throwError(error);
      })
    );
  }

  addEntry(entry: DiaryEntry) {
    return this.diaryCollection.add(entry);
  }

  updateEntry(id: string, entry: DiaryEntry) {
    return this.diaryCollection.doc(id).update(entry);
  }
  isLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  deleteEntry(id: string) {
    return this.diaryCollection.doc(id).delete();
  }
}
