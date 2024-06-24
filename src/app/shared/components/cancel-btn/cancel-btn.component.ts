import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { ChosenProductsService } from '../../services/chosenProducts.service';

@Component({
  selector: 'app-cancel-btn',
  standalone: true,
  imports: [],
  templateUrl: './cancel-btn.component.html',
  styleUrl: './cancel-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelBtnComponent {
  @Input() productId!: number;

  chosenProducts = inject(ChosenProductsService);

  cancelProduct(event: Event) {
    this.chosenProducts.cancelChosenProduct(this.productId);
    event.stopPropagation();
  }
}
