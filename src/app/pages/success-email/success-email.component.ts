import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestsGoBackBtnComponent } from '../../shared/components/online-tests/tests-go-back-btn/tests-go-back-btn.component';

@Component({
  selector: 'app-success-email',
  standalone: true,
  imports: [TestsGoBackBtnComponent],
  templateUrl: './success-email.component.html',
  styleUrl: './success-email.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessEmailComponent {
  lastPath: string = 'online-tests';
}
