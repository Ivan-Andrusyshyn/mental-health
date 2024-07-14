import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthService } from '../../../services/auth.service';
import { SocialLinksComponent } from '../../social-links/social-links.component';
import { AdminPanelMenuComponent } from '../admin-panel-menu/admin-panel-menu.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { UserNavComponent } from './user-nav/user-nav.component';

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
    DropdownMenuComponent,
    UserNavComponent,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent {
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

  isAuthRoleUser: boolean = false;
  isAuthRoleAdmin: boolean = false;

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
  }
}
