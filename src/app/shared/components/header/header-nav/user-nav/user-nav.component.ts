import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialLinksComponent } from '../../../social-links/social-links.component';
import { ChosenProductsService } from '../../../../services/chosenProducts.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SocialLinksComponent],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserNavComponent {
  amountProducts!: number;
  private chosenProdService = inject(ChosenProductsService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.chosenProdService
      .getChosenProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.cdr.markForCheck();
        this.amountProducts = resp.length;
      });
  }
}
