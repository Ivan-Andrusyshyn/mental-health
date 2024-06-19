import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from '../../auth-components/login/login.component';
import { SignInComponent } from '../../auth-components/sign-in/sign-in.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header-modal',
  standalone: true,
  imports: [
    LoginComponent,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    SignInComponent,
  ],
  templateUrl: './header-modal.component.html',
  styleUrl: './header-modal.component.css',
})
export class HeaderModalComponent {
  private authService = inject(AuthService);
  private location = inject(Location);
  private dialogRef = inject(MatDialogRef<HeaderModalComponent>);

  isUser: boolean = false;
  isAdmin: boolean = false;
  isLoginPage: boolean = true;

  constructor() {
    const state = this.location.path();
    this.isLoginPage = state.includes('login') ? true : false;

    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isUser) => {
        this.isUser = isUser;
      });

    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isAdmin) => {
        this.isAdmin = isAdmin;
      });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
