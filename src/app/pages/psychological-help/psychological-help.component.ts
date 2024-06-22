import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-psychological-help',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './psychological-help.component.html',
  styleUrl: './psychological-help.component.css',
})
export class PsychologicalHelpComponent {
  private authSv = inject(AuthService);
  userData: any;

  constructor() {
    this.authSv.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      this.userData = {
        userName: user?.displayName,
        userId: user?.uid,
      };
    });
  }
}
