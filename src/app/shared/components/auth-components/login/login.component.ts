import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  @Input() isAdmin = false;
  @Input() isUser = false;

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

    this.role = {
      isAdmin: this.isAdmin,
      isUser: this.isUser,
    };
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
