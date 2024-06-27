import { Component } from '@angular/core';
import { DiaryListComponent } from '../../shared/components/my-diary/diary-list/diary-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-diary',
  standalone: true,
  imports: [DiaryListComponent, RouterOutlet, RouterLink],
  templateUrl: './my-diary.component.html',
  styleUrl: './my-diary.component.css',
})
export class MyDiaryComponent {}
