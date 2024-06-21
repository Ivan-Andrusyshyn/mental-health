import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [MatMenuModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  router = inject(Router);
  private authService = inject(AuthService);

  @Output() logOut = new EventEmitter<void>();

  onLogOut() {
    this.logOut.emit();
    this.router.navigate(['/home']);
  }
}
