import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-item',
  standalone: true,
  imports: [],
  templateUrl: './test-item.component.html',
  styleUrl: './test-item.component.css',
})
export class TestItemComponent {
  @Input() test: any;
}
