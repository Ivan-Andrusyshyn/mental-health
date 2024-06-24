import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Test } from '../../../../../models/online-test.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-buttons',
  standalone: true,
  imports: [NgIf],
  templateUrl: './form-buttons.component.html',
  styleUrl: './form-buttons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormButtonsComponent {
  @Input() currentQuestionIndex: number = 0;
  @Input() testForm!: FormGroup;
  @Input() selectedTest!: Test;

  @Input() isDisabledButton!: boolean;

  @Output() onNextQuestion = new EventEmitter<void>();
  @Output() onPreviousQuestion = new EventEmitter<void>();

  nextQuestion() {
    this.onNextQuestion.emit();
  }
  previousQuestion() {
    this.onPreviousQuestion.emit();
  }
}
