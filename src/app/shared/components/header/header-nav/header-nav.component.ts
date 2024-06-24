import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ChosenProductsService } from '../../../services/chosenProducts.service';
import { AuthService } from '../../../services/auth.service';
import { SocialLinksComponent } from '../../social-links/social-links.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { AuthModalComponent } from '../../auth-components/auth-modal/auth-modal.component';
import { AdminPanelMenuComponent } from '../admin-panel-menu/admin-panel-menu.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    SocialLinksComponent,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    AdminPanelMenuComponent,
    UserMenuComponent,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent {
  private cp = inject(ChosenProductsService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);

  amountProducts!: number;
  isAuthRoleUser: boolean = false;
  isAuthRoleAdmin: boolean = false;

  userData: any = null;

  constructor() {
    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => {
        this.isAuthRoleUser = role;
        this.cdr.markForCheck();
      });
    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((role) => {
        this.isAuthRoleAdmin = role;
        this.cdr.markForCheck();
      });

    this.authService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (!user) return;
      this.userData = {
        uid: user?.uid,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.phoneNumber,
        emailVerified: user?.emailVerified,
      };
      this.cdr.markForCheck();
    });

    this.cp
      .getChosenProducts()
      .pipe(takeUntilDestroyed())
      .subscribe((resp) => {
        this.cdr.markForCheck();
        this.amountProducts = resp.length;
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
