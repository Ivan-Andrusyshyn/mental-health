import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { BtnGoogleComponent } from '../btn-google/btn-google.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgIf,
    BtnGoogleComponent,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  private dialogRef = inject(MatDialogRef<AuthModalComponent>);

  @Input() formGroupAuth!: FormGroup;
  @Input() isLogin!: boolean;

  @Output() submit = new EventEmitter<void>();
  @Output() changeRole = new EventEmitter<MatSelectChange>();

  constructor() {}

  onChangeRole(event: MatSelectChange) {
    this.changeRole.emit(event);
  }

  onSubmit() {
    this.submit.emit();
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
