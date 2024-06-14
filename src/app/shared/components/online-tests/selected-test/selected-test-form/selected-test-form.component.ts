import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Test } from '../../../../models/online-test.model';
import { TestOptions } from '../../../../models/test-options.model';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectedTestResultComponent } from '../selected-test-result/selected-test-result.component';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';

@Component({
  selector: 'app-selected-test-form',
  standalone: true,
  imports: [
    SelectedTestResultComponent,
    NgClass,
    NgFor,
    ReactiveFormsModule,
    NgIf,
    FormButtonsComponent,
  ],
  templateUrl: './selected-test-form.component.html',
  styleUrl: './selected-test-form.component.css',
})
export class SelectedTestFormComponent {
  @Input() currentQuestionIndex: number = 0;
  @Input() selectedTest!: Test;
  @Input() options: TestOptions[] = [];
  @Input() testForm!: FormGroup;
  @Input() score!: number | null;

  @Output() calculateScore = new EventEmitter();
  @Output() nextQuestion = new EventEmitter<void>();
  @Output() previousQuestion = new EventEmitter<void>();

  onNextQuestion() {
    if (this.currentQuestionIndex < this.selectedTest.questions.length - 1) {
      this.currentQuestionIndex++;
      this.nextQuestion.emit();
    }
  }

  onPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.previousQuestion.emit();
    }
  }
  onCalculateScore() {
    this.calculateScore.emit();
  }

  getCurrentQuestionValid(): boolean {
    if (!this.testForm) return false;
    const questionsArray = this.testForm.get('questions') as FormArray;
    if (!questionsArray) return false;
    const validQuestion = questionsArray.at(
      this.currentQuestionIndex
    ) as FormGroup;
    return validQuestion.valid && validQuestion.dirty;
  }
}
