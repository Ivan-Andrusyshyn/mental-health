import { Component, Input } from '@angular/core';
import { DiaryEntry } from '../../../models/diary-note.model';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-diary-item',
  standalone: true,
  imports: [MatCard, RouterLinkActive, RouterLink, DatePipe, MatCardHeader],
  templateUrl: './diary-item.component.html',
  styleUrl: './diary-item.component.css',
})
export class DiaryItemComponent {
  @Input() entry!: DiaryEntry;
}
