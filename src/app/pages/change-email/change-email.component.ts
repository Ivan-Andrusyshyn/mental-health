import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ChangeEmailService } from '../../shared/services/change-email.service';

@Component({
  selector: 'app-change-email',
  standalone: true,
  imports: [
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    NgFor,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './change-email.component.html',
  styleUrl: './change-email.component.css',
})
export class ChangeEmailComponent implements OnInit {
  private changeEmailService = inject(ChangeEmailService);

  email_list = [
    { name: 'Alex', email: 'andrusyshyn.alexandr@gmail.com' },
    { name: 'Ivan', email: 'andrusyshyn.ivan@gmail.com' },
  ];
  ngOnInit(): void {
    this.selectedEmail = this.changeEmailService.getEmail();
  }
  selectedEmail: string | null = null;

  onEmailChange(email: string): void {
    this.selectedEmail = email;
    this.changeEmailService.changeEmail(email);
  }
}
