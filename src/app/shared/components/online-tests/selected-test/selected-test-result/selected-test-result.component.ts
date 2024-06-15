import { Component, inject, Input } from '@angular/core';
import { TestsService } from '../../../../services/tests.service';
import { TestsResult } from '../../../../models/testsResult.model';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

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

  private testService = inject(TestsService);
  public dialog = inject(MatDialog);

  testResult: string = '';
  problem: string = '';

  ngOnInit(): void {
    this.loadTestResult();
  }
  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '400px',
      height: '600px',
      data: {
        problem: this.problem,
        testImg: this.testImg,
        score: this.score,
        testResult: this.testResult,
      },
    });
  }

  private loadTestResult(): void {
    const result = this.testService
      .getTestResults()
      .find((item) => item.testId === this.testId);

    if (result && this.score !== null) {
      const data = this.testService.getTestResultText(result, this.score);
      if (!data) return;
      this.problem = data.problem;
      this.testResult = data.text;
    }
  }
}
