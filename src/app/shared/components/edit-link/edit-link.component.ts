import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-link.component.html',
  styleUrl: './edit-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditLinkComponent {
  @Input() productId!: number;
}
