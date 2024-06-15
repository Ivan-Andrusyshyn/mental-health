import { NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf,
    MatFormField,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatLabel,
    MatDialogTitle,
    MatError,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      testResult: string;
      problem: string;
      testImg: string;
      score: number;
    },
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      const email = this.emailForm.value.email;
      const resultData = {
        email: email,
        testResult: this.data.testResult,
        testImg: this.data.testImg,
        score: this.data.score,
      };
      console.log('Form Submitted', resultData);
      this.dialogRef.close(resultData);
    }
  }
}
