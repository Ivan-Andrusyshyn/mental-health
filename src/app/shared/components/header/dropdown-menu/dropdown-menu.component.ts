import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [MatMenuModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  @Output() logOut = new EventEmitter<void>();

  userName: string = '';

  constructor() {
    this.authService
      .getUserDataObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((user) => {
        if (!user?.displayName) return;
        this.userName = user.displayName;
      });
  }
  onLogOut() {
    this.logOut.emit();
    this.router.navigate(['/home']);
  }
}
