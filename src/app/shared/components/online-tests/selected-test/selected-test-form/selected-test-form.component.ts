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
export class SelectedTestFormComponent implements OnInit {
  @Input() currentQuestionIndex: number = 0;
  @Input() selectedTest!: Test;
  @Input() options: TestOptions[] = [];
  @Input() testForm!: FormGroup;
  @Input() score!: number | null;

  @Output() calculateScore = new EventEmitter();
  @Output() nextQuestion = new EventEmitter<void>();
  @Output() previousQuestion = new EventEmitter<void>();

  disabledButton = false;
  onNextQuestion() {
    if (this.currentQuestionIndex < this.selectedTest.questions.length - 1) {
      this.currentQuestionIndex++;
      this.nextQuestion.emit();
    }
  }
  ngOnInit(): void {
    this.testForm.valueChanges.subscribe((resp) => {
      this.getCurrentQuestionValid();
    });
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

  getCurrentQuestionValid(): void {
    if (!this.testForm) return;
    const questionsArray = this.testForm.get('questions') as FormArray;
    if (!questionsArray) return;
    const validQuestion = questionsArray.at(
      this.currentQuestionIndex
    ) as FormGroup;
    if (validQuestion.valid && validQuestion.dirty) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }
}
