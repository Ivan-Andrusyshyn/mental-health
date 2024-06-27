import { Component, inject } from '@angular/core';
import { MyDiaryService } from '../../../services/my-diary.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { DiaryEntry } from '../../../models/diary-note.model';

@Component({
  selector: 'app-diary-add-note-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './diary-add-note-form.component.html',
  styleUrl: './diary-add-note-form.component.css',
})
export class DiaryAddNoteFormComponent {
  private fb = inject(FormBuilder);
  private diaryService = inject(MyDiaryService);
  private router = inject(Router);

  entryForm!: FormGroup;
  constructor() {
    this.entryForm = this.fb.group({
      date: [Date.now(), Validators.required],
      mood: [5],
      description: [''],
      physicalState: [5],
      emotions: [''],
      events: [''],
      selfCareMethods: [''],
      achievements: [''],
      gratitude: [''],
      notes: [''],
    });
  }

  onSubmit() {
    this.diaryService.addEntry(this.entryForm.value);
    this.router.navigate(['my-diary']);
    this.entryForm.reset();
  }
}
