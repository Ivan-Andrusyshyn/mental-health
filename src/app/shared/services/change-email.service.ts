import { inject, Injectable } from '@angular/core';

import { SHOPS_EMAIL } from '../../configs/storage-keys';

@Injectable({
  providedIn: 'root',
})
export class ChangeEmailService {
  constructor() {}

  changeEmail(email: string) {
    localStorage.setItem(SHOPS_EMAIL, email);
  }

  getEmail(): string | null {
    const email: string = localStorage.getItem(SHOPS_EMAIL) || '';

    return email;
  }
}
