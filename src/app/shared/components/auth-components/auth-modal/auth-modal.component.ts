import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Location } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from '../login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [
    LoginComponent,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    SignUpComponent,
  ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css',
})
export class AuthModalComponent {
  private authService = inject(AuthService);
  private location = inject(Location);
  private dialogRef = inject(MatDialogRef<AuthModalComponent>);

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
  onChangeRole() {
    if (this.isUser) {
      // admin
      this.isAdmin = true;
      this.isUser = false;
    } else {
      // user
      this.isAdmin = false;
      this.isUser = true;
    }
  }
  closeModal(): void {
    this.dialogRef.close();
  }
}
