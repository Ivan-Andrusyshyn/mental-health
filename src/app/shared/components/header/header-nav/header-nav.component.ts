import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { SocialLinksComponent } from '../../social-links/social-links.component';
import { AdminPanelMenuComponent } from '../admin-panel-menu/admin-panel-menu.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { UserNavComponent } from './user-nav/user-nav.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    SocialLinksComponent,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    AdminPanelMenuComponent,
    DropdownMenuComponent,
    UserNavComponent,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNavComponent {
  isUser = input();
  isAdmin = input();
  constructor() {}
}
