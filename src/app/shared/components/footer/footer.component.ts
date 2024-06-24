import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../social-links/social-links.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
