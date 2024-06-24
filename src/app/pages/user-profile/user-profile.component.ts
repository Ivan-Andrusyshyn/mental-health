import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthFormComponent } from '../../shared/components/auth-components/auth-form/auth-form.component';
import { AuthService } from '../../shared/services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    AuthFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    GoBackBtnComponent,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent {
  profileForm: FormGroup;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  isLogin: boolean = false;
  lastPath: string = 'home';

  constructor() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.authService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (user) {
        this.profileForm.patchValue({
          name: user.displayName,
          email: user.email,
          password: '123456',
        });
      }
    });
  }
  changeRole() {}
  onSubmit() {
    if (this.profileForm.valid) {
      const { name, email, password } = this.profileForm.value;
      console.log('Form Submitted', { name, email, password });
    }
  }
}
