import { Component, inject, Input } from '@angular/core';
import { TestsService } from '../../../../services/tests.service';
import { TestsResult } from '../../../../models/testsResult.model';

@Component({
  selector: 'app-selected-test-result',
  standalone: true,
  imports: [],
  templateUrl: './selected-test-result.component.html',
  styleUrl: './selected-test-result.component.css',
})
export class SelectedTestResultComponent {
  @Input() score!: number | null;
  @Input() testId!: number;
  @Input() testImg!: string;

  testResult: string = '';

  constructor(private testService: TestsService) {}

  ngOnInit(): void {
    this.loadTestResult();
  }

  private loadTestResult(): void {
    const result = this.testService
      .getTestResults()
      .find((item) => item.testId === this.testId);

    if (result && this.score !== null) {
      this.testResult = this.testService.getTestResultText(result, this.score);
    }
  }
}
