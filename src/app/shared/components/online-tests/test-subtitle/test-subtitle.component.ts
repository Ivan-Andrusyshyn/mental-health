import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './test-subtitle.component.html',
  styleUrl: './test-subtitle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestSubtitleComponent {}
