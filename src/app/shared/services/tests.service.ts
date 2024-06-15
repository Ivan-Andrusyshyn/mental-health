import { Injectable } from '@angular/core';
import { Test } from '../models/online-test.model';
import { testsList } from '../../options/tests-list';
import { TestsResult } from '../models/testsResult.model';
import { testsResult } from '../../options/tests-options';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  private tests: Test[];
  private testResults: TestsResult[];

  constructor() {
    this.tests = testsList;
    this.testResults = testsResult;
  }

  getTests(): Test[] {
    return this.tests;
  }

  getTestResults(): TestsResult[] {
    return this.testResults;
  }

  getTestResultText(
    result: TestsResult,
    score: number
  ): { text: string; problem: string } | null {
    for (const explanation of result.explanation) {
      if (score >= explanation.range.min && score <= explanation.range.max) {
        return { text: explanation.text, problem: explanation.results };
      }
    }
    return null;
  }
}
