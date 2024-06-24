import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {}
