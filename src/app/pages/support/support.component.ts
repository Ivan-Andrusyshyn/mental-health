import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DatePipe, NgFor } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthService } from '../../shared/services/auth.service';

interface Message {
  text: string;
  date: Date;
}
@Component({
  selector: 'app-support',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    NgFor,
    DatePipe,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  private authService = inject(AuthService);

  messageForm: FormGroup;
  messages: Message[] = [];
  userData: any;

  constructor(private fb: FormBuilder) {
    this.authService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (!user) return;
      this.userData = {
        uid: user?.uid,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.phoneNumber,
        emailVerified: user?.emailVerified,
      };
    });

    this.messageForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.messageForm.valid) {
      const messageText = this.messageForm.value.message;
      const message: Message = {
        text: messageText,
        date: new Date(),
      };
      this.messages.push(message);
      console.log('Message sent:', message);
      this.messageForm.reset();
    }
  }
}
