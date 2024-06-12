import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../../shared/models/online-test.model';
import { TestsService } from '../../shared/services/tests.service';
import { GoBackBtnComponent } from '../../shared/components/go-back-btn/go-back-btn.component';

@Component({
  selector: 'app-selected-test',
  standalone: true,
  imports: [GoBackBtnComponent],
  templateUrl: './selected-test.component.html',
  styleUrl: './selected-test.component.css',
})
export class SelectedTestComponent {
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
