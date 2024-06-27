import { Component } from '@angular/core';
import { TestsGoBackBtnComponent } from '../../shared/components/online-tests/tests-go-back-btn/tests-go-back-btn.component';
import { DiaryAddNoteFormComponent } from '../../shared/components/my-diary/diary-add-note-form/diary-add-note-form.component';

@Component({
  selector: 'app-diary-add-note',
  standalone: true,
  imports: [TestsGoBackBtnComponent, DiaryAddNoteFormComponent],
  templateUrl: './diary-add-note.component.html',
  styleUrl: './diary-add-note.component.css',
})
export class DiaryAddNoteComponent {
  lastPath = 'my-diary';
}
