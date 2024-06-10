import { Injectable } from '@angular/core';

const STORAGE_ADMIN = 'Admin';
const STORAGE_USER = 'User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUser: boolean;
  private isAdmin: boolean;

  constructor() {
    this.isUser = this.getIsAuthUser();
    this.isAdmin = this.getIsAuthAdmin();
  }

  getIsAuthUser(): boolean {
    return JSON.parse(localStorage.getItem(STORAGE_USER) || 'true');
  }

  getIsAuthAdmin(): boolean {
    return JSON.parse(localStorage.getItem(STORAGE_ADMIN) || 'false');
  }

  loginUser(): void {
    this.isUser = true;
    this.isAdmin = false;
    this.updateLocalStorage();
  }

  loginAdmin(): void {
    this.isAdmin = true;
    this.isUser = false;
    this.updateLocalStorage();
  }

  logout(): void {
    this.isUser = false;
    this.isAdmin = false;
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem(STORAGE_USER, JSON.stringify(this.isUser));
    localStorage.setItem(STORAGE_ADMIN, JSON.stringify(this.isAdmin));
  }
}
