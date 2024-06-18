import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private authService = inject(AuthService);

  isUser: boolean = false;
  isAdmin: boolean = false;

  constructor() {
    this.authService
      .getIsUserObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isUser) => {
        this.isUser = isUser;
      });

    this.authService
      .getIsAdminObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((isAdmin) => {
        this.isAdmin = isAdmin;
      });
  }
}
