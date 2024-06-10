import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeEmailService {
  private storageKey = 'selectedEmail';

  constructor() {}

  changeEmail(email: string) {
    localStorage.setItem(this.storageKey, email);
  }

  getEmail(): string | null {
    return localStorage.getItem(this.storageKey);
  }
}
