import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-title',
  standalone: true,
  imports: [],
  templateUrl: './test-title.component.html',
  styleUrl: './test-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestTitleComponent {}
