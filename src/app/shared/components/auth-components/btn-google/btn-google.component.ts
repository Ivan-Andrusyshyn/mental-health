import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GoogleSsoDirective } from '../../../directives/google-sso.directive';

@Component({
  selector: 'app-btn-google',
  standalone: true,
  imports: [GoogleSsoDirective],
  templateUrl: './btn-google.component.html',
  styleUrl: './btn-google.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnGoogleComponent {
  @Input() isLogin: boolean = false;
}
