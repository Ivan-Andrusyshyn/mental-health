import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AuthService } from '../../services/auth.service';
import { ChosenProductsService } from '../../services/chosenProducts.service';
import { AuthModalComponent } from '../auth-components/auth-modal/auth-modal.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { UserData } from '../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent, NgIf, DropdownMenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private cp = inject(ChosenProductsService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  isUser!: boolean;
  isAdmin!: boolean;
  userData: UserData | null = null;

  constructor() {
    this.authService
      .getUserDataObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((user) => {
        if (!user) return;
        this.userData = user;
      });
    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => {
        this.isUser = role;
      });
    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => {
        this.isAdmin = role;
        this.cdr.markForCheck();
      });
  }

  logOut() {
    this.authService.logout();
    this.userData = null;
  }

  openLoginModal(): void {
    this.dialog.open(AuthModalComponent);
  }
}
