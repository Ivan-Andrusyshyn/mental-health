import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  @Input() productForm!: FormGroup;
  @Input() textBtn!: string;
  @Output() onSubmit = new EventEmitter<void>();
  @Output() resetSelection = new EventEmitter<void>();

  onReset() {
    this.resetSelection.emit();
  }

  submitForm() {
    if (this.productForm.valid) {
      this.onSubmit.emit();
    }
  }
}
