import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-panel-menu',
  standalone: true,
  imports: [MatMenuModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-panel-menu.component.html',
  styleUrl: './admin-panel-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPanelMenuComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
}
