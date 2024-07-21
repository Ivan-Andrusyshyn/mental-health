import { inject, Injectable } from '@angular/core';

import { SHOPS_EMAIL } from '../../configs/storage-keys';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ChangeEmailService {
  private storageService = inject(StorageService);
  constructor() {}

  changeEmail(email: string) {
    this.storageService.setData(SHOPS_EMAIL, email);
  }

  getEmail(): string | null {
    const email: string = this.storageService.getData(SHOPS_EMAIL);

    return email;
  }
}
