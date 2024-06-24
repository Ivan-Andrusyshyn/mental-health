import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  emailForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      testResult: string;
      problem: string;
      testImg: string;
      score: number;
    },
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // message: ['', [Validators.required]],
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      const formData = {
        name: this.emailForm.value.name,
        email: this.emailForm.value.email,
        result: 'Результати тестування' + ' ' + this.data.testResult,
        score: 'Ваша кількість балів ' + ' ' + this.data.score,
      };

      this.http.post('https://submit-form.com/IWivaiDXn', formData).subscribe(
        (response) => {
          console.log('Form submitted successfully', response);
          this.dialogRef.close(formData);
          this.router.navigate(['test/success-email']);
        },
        (error) => {
          console.error('Error submitting form', error);
        }
      );
    }
  }
}
