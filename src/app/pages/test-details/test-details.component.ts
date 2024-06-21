import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

import { TestsService } from '../../shared/services/tests.service';
import { Test } from '../../shared/models/online-test.model';

import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TestsGoBackBtnComponent } from '../../shared/components/online-tests/tests-go-back-btn/tests-go-back-btn.component';

@Component({
  selector: 'app-test-details',
  standalone: true,
  imports: [NgIf, TestsGoBackBtnComponent, RouterLink],
  templateUrl: './test-details.component.html',
  styleUrl: './test-details.component.css',
})
export class TestDetailsComponent {
  route = inject(ActivatedRoute);
  testsService = inject(TestsService);
  selectedTest!: Test;

  constructor() {
    this.route.params.pipe(takeUntilDestroyed()).subscribe((resp) => {
      const { id } = resp;
      const tests = this.testsService.getTests();
      this.selectedTest = tests.filter((pr) => pr.id === +id)[0];
    });
  }
}
