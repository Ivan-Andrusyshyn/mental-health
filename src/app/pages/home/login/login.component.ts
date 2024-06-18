import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  loginForm!: FormGroup;
  isUser: boolean = true;
  isAdmin: boolean = false;

  constructor() {
    this.loginForm = this.fb.group({
      role: ['user', Validators.required],
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isUser) => {
        this.isUser = isUser;
        console.log('User state:', isUser);
      });

    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isAdmin) => {
        this.isAdmin = isAdmin;
        console.log('Admin state:', isAdmin);
      });
  }

  changeRole(event: MatSelectChange): void {
    const selectedRole = event.value;
    this.authService.onChangeRole(selectedRole);
    if (selectedRole === 'user') {
      this.loginForm.patchValue({
        email: 'user@gmail.com',
        password: '123456',
      });
    } else if (selectedRole === 'admin') {
      this.loginForm.patchValue({
        email: 'admin@gmail.com',
        password: '123456',
      });
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const formValues = this.loginForm.value;
    const role = formValues.role;

    if (role === 'user') {
      this.authService.loginUser();
    } else if (role === 'admin') {
      this.authService.loginAdmin();
    }

    console.log('Form Submitted', formValues);
  }
}
