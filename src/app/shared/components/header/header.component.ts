import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ChosenProductsService } from '../../services/chosenProducts.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../auth-components/auth-modal/auth-modal.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent, DropdownMenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private cp = inject(ChosenProductsService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);

  userData: any = null;

  constructor() {
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
  }

  logOut() {
    this.authService.logout();
    this.userData = null;
  }

  openLoginModal(): void {
    this.dialog.open(AuthModalComponent);
  }
}
