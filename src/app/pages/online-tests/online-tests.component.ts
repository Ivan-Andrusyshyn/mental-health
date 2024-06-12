import { Component, inject } from '@angular/core';
import { TestListComponent } from '../../shared/components/online-tests/test-list/test-list.component';
import { TestSubtitleComponent } from '../../shared/components/online-tests/test-subtitle/test-subtitle.component';
import { TestTitleComponent } from '../../shared/components/online-tests/test-title/test-title.component';
import { Test } from '../../shared/models/online-test.model';
import { TestsService } from '../../shared/services/tests.service';

@Component({
  selector: 'app-online-tests',
  standalone: true,
  imports: [TestListComponent, TestSubtitleComponent, TestTitleComponent],
  templateUrl: './online-tests.component.html',
  styleUrl: './online-tests.component.css',
})
export class OnlineTestsComponent {
  testsService = inject(TestsService);
  tests: Test[];

  constructor() {
    this.tests = this.testsService.getTests();
  }
}
