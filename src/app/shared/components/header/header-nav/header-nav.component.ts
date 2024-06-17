import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChosenProductsService } from '../../../services/chosenProducts.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { MenuComponent } from '../menu/menu.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SocialLinksComponent } from '../../social-links/social-links.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    SocialLinksComponent,
    RouterLinkActive,
    MenuComponent,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  private cp = inject(ChosenProductsService);
  private authService = inject(AuthService);
  amountProducts!: number;

  constructor() {
    this.cp
      .getChosenProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.amountProducts = resp.length;
      });
  }

  get isAuthUser() {
    return this.authService.getIsAuthUser();
  }

  get isAuthAdmin() {
    return this.authService.getIsAuthAdmin();
  }
}
