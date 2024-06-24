import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { Test } from '../../shared/models/online-test.model';
import { TestsService } from '../../shared/services/tests.service';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';
import { testOptions } from '../../options/tests-options';

import { SelectedTestFormComponent } from '../../shared/components/online-tests/selected-test/selected-test-form/selected-test-form.component';
import { TestsGoBackBtnComponent } from '../../shared/components/online-tests/tests-go-back-btn/tests-go-back-btn.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CalculateScoreService } from './calculateScore.service';

@Component({
  selector: 'app-selected-test',
  standalone: true,
  imports: [
    GoBackBtnComponent,
    SelectedTestFormComponent,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    TestsGoBackBtnComponent,
    NgIf,
  ],
  templateUrl: './selected-test.component.html',
  styleUrl: './selected-test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedTestComponent implements OnInit {
  route = inject(ActivatedRoute);
  testsService = inject(TestsService);
  fb = inject(FormBuilder);
  calculateService = inject(CalculateScoreService);

  selectedTest!: Test;
  options;
  score: number | null = null;
  currentQuestionIndex: number = 0;
  testForm!: FormGroup;
  lastPath: string = 'online-tests';

  constructor() {
    this.options = testOptions;

    this.route.params.pipe(takeUntilDestroyed()).subscribe((resp) => {
      const { id } = resp;
      const tests = this.testsService.getTests();
      this.selectedTest = tests.filter((pr) => pr.id === +id)[0];
    });
  }

  ngOnInit(): void {
    this.testForm = this.fb.group({
      questions: this.fb.array(
        this.selectedTest.questions.map(() =>
          this.fb.group({
            selectedOption: [''],
          })
        )
      ),
    });
  }

  get questions(): FormArray {
    return this.testForm.get('questions') as FormArray;
  }

  calculateScore(): void {
    this.currentQuestionIndex++;

    this.score = this.calculateService.calculateScore(this.questions.controls);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.selectedTest.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
}
