import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { ChosenProductsService } from '../../services/chosenProducts.service';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-buy-btn',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatMenuModule],
  templateUrl: './buy-btn.component.html',
  styleUrl: './buy-btn.component.css',
})
export class BuyBtnComponent {
  @Input() productId!: number;
  @Input() quantity!: number;
  @Input() obviously!: number;
  @Input() isMyProductPage!: boolean;
  chosenProductsService = inject(ChosenProductsService);
  isVisible = false;

  @ViewChild('menu', { static: false }) menuElement!: ElementRef;
  constructor(public dialog: MatDialog) {}
  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }
  incrementProduct(event: Event) {
    if (this.quantity === undefined) return;
    this.quantity = this.quantity + 1;
    this.chosenProductsService.chooseProduct(this.productId, this.quantity);
    event.stopPropagation();
  }
  decrementProduct(event: Event) {
    if (this.quantity === undefined) return;

    this.quantity = this.quantity - 1;
    this.chosenProductsService.decrementProduct(this.productId);
    event.stopPropagation();
  }
}
