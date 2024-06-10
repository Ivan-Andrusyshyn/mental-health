import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [],
  templateUrl: './total-amount.component.html',
  styleUrl: './total-amount.component.css',
})
export class TotalAmountComponent {
  @Input() totalAmount!: number;
}
