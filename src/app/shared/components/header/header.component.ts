import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private authService = inject(AuthService);
}
