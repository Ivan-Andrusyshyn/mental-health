import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test-item.component.html',
  styleUrl: './test-item.component.css',
})
export class TestItemComponent {
  @Input() test: any;
}
