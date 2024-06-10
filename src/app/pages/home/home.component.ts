import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private authService = inject(AuthService);

  loginUser() {
    this.authService.loginUser();
  }

  loginAdmin() {
    this.authService.loginAdmin();
  }
}
