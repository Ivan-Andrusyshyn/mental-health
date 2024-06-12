import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

import { TestsService } from '../../shared/services/tests.service';
import { Test } from '../../shared/models/online-test.model';

import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';

@Component({
  selector: 'app-test-details',
  standalone: true,
  imports: [
    NgIf,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    GoBackBtnComponent,
  ],
  templateUrl: './test-details.component.html',
  styleUrl: './test-details.component.css',
})
export class TestDetailsComponent {
  route = inject(ActivatedRoute);
  testsService = inject(TestsService);
  selectedTest!: Test;

  constructor() {
    this.route.params.subscribe((resp) => {
      const { id } = resp;
      const tests = this.testsService.getTests();
      this.selectedTest = tests.filter((pr) => pr.id === +id)[0];
    });
  }
}
