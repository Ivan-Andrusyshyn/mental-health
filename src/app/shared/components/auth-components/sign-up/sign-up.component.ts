import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { AuthFormComponent } from '../auth-form/auth-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

interface Role {
  isUser: boolean;
  isAdmin: boolean;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  isLogin: boolean = false;

  signupForm!: FormGroup;

  @Input() isAdmin = false;
  @Input() isUser = false;
  @Output() onChangeRole = new EventEmitter<void>();

  role: Role = {
    isAdmin: false,
    isUser: true,
  };

  constructor() {
    this.signupForm = this.fb.group({
      role: ['User', Validators.required],
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      displayName: ['User', Validators.required],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['123456', Validators.required],
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
      this.signupForm.patchValue({
        displayName: 'User',
        email: 'user@gmail.com',
        password: '123456',
        confirmPassword: '123456',
      });
    } else if (selectedRole === 'Admin') {
      this.signupForm.patchValue({
        displayName: 'Admin',
        email: 'admin@gmail.com',
        password: '123456',
        confirmPassword: '123456',
      });
    }
  }

  onSubmit(): void {
    if (this.signupForm.invalid) return;

    const formValues = this.signupForm.value;
    const role = formValues.role;

    this.authService.signUp(
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.displayName,
      role
    );
    if (role === 'User') {
      this.authService.loginUser();
    } else if (role === 'Admin') {
      this.authService.loginAdmin();
    }
  }
}
