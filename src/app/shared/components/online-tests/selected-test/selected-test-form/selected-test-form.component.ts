import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Test } from '../../../../models/online-test.model';
import { TestOptions } from '../../../../models/test-options.model';
import { SelectedTestResultComponent } from '../selected-test-result/selected-test-result.component';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-selected-test-form',
  standalone: true,
  imports: [
    SelectedTestResultComponent,
    NgClass,
    NgFor,
    ReactiveFormsModule,
    NgIf,
    NgStyle,
    MatProgressBar,
  ],
  templateUrl: './selected-test-form.component.html',
  styleUrl: './selected-test-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedTestFormComponent implements OnDestroy {
  private scrollService = inject(ScrollService);

  @Input() currentQuestionIndex: number = 0;
  @Input() selectedTest!: Test;
  @Input() options: TestOptions[] = [];
  @Input() testForm!: FormGroup;
  @Input() score!: number | null;

  @Output() calculateScore = new EventEmitter();
  @Output() nextQuestion = new EventEmitter<void>();
  @Output() previousQuestion = new EventEmitter<void>();

  @ViewChildren('questionElement') questionElements!: QueryList<ElementRef>;

  onNextQuestion() {
    if (this.currentQuestionIndex < this.selectedTest.questions.length - 1) {
      this.currentQuestionIndex++;
      const setTimeoutSmooth = this.scrollService.scrollToCurrentQuestion(
        this.currentQuestionIndex,
        this.questionElements
      );

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  ngOnDestroy(): void {
    this.scrollService.cancelSmoothScroll();
  }
}
