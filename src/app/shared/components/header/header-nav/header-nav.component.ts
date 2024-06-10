import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChosenProductsService } from '../../../services/chosenProducts.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink, NgIf, RouterLinkActive, MenuComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
})
export class HeaderNavComponent {
  private cp = inject(ChosenProductsService);
  private authService = inject(AuthService);
  amountProducts!: number;

  constructor() {
    this.cp.getChosenProducts().subscribe((resp) => {
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
