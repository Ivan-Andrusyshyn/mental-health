import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [MatMenuModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  router = inject(Router);
  private authService = inject(AuthService);

  @Input() userName!: string;
  @Output() logOut = new EventEmitter<void>();

  onLogOut() {
    this.logOut.emit();
    this.router.navigate(['/home']);
  }
}
