import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';
import { MatButtonModule } from '@angular/material/button';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthModalComponent {
  private location = inject(Location);
  private dialogRef = inject(MatDialogRef<AuthModalComponent>);

  isUser: boolean = true;
  isAdmin: boolean = false;

  isLoginPage: boolean = true;

  constructor() {
    const state = this.location.path();
    this.isLoginPage = state.includes('login') ? true : false;
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
