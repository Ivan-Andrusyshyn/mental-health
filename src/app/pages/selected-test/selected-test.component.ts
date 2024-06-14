import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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

@Component({
  selector: 'app-selected-test',
  standalone: true,
  imports: [
    GoBackBtnComponent,
    SelectedTestFormComponent,
    MatProgressBarModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
  ],
  templateUrl: './selected-test.component.html',
  styleUrl: './selected-test.component.css',
})
export class SelectedTestComponent implements OnInit {
  route = inject(ActivatedRoute);
  testsService = inject(TestsService);
  fb = inject(FormBuilder);

  selectedTest!: Test;
  options;
  score: number | null = null;
  currentQuestionIndex: number = 0;
  testForm!: FormGroup;

  constructor() {
    this.options = testOptions;

    this.route.params.subscribe((resp) => {
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
  calculateScore() {
    this.currentQuestionIndex++;
    this.score = this.questions.controls.reduce((total, control) => {
      const selectedValue = control.get('selectedOption')?.value;
      return total + (selectedValue ? parseInt(selectedValue, 10) : 0);
    }, 0);
    console.log(this.score);
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
