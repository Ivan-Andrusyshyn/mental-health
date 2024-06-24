import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TestItemComponent } from '../test-item/test-item.component';
import { Test } from '../../../models/online-test.model';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [TestItemComponent],
  templateUrl: './test-list.component.html',
  styleUrl: './test-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestListComponent {
  @Input() tests!: Test[];
}
