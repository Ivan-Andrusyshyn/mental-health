import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthFormComponent } from '../auth-form/auth-form.component';
import { AuthService } from '../../../services/auth.service';

interface Role {
  isUser: boolean;
  isAdmin: boolean;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  @Output() onChangeRole = new EventEmitter<void>();
  loginForm!: FormGroup;

  role: Role = {
    isAdmin: false,
    isUser: true,
  };
  isLogin: boolean = true;

  constructor() {
    this.loginForm = this.fb.group({
      role: ['User', Validators.required],
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });

    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isUser) => {
        this.role.isUser = isUser;
        if (isUser)
          this.loginForm.patchValue({
            role: 'User',
          });
      });

    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isAdmin) => {
        this.role.isAdmin = isAdmin;
        if (isAdmin)
          this.loginForm.patchValue({
            role: 'Admin',
          });
      });
  }

  changeRole(event: MatSelectChange): void {
    const selectedRole = event.value;
    this.onChangeRole.emit();
    if (selectedRole === 'User') {
      this.loginForm.patchValue({
        email: 'user@gmail.com',
        password: '123456',
      });
    } else if (selectedRole === 'Admin') {
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

    this.authService.signIn(
      this.loginForm.value.email,
      this.loginForm.value.password,
      role
    );

    if (role === 'User') {
      this.authService.loginUser();
    } else if (role === 'Admin') {
      this.authService.loginAdmin();
    }
  }
}
