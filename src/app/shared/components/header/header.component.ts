import { Component } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
