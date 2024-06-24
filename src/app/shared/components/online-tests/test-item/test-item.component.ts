import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test-item.component.html',
  styleUrl: './test-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestItemComponent {
  @Input() test: any;
}
