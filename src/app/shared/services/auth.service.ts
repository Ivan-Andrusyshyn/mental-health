import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_ADMIN = 'Admin';
const STORAGE_USER = 'User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserSubject: BehaviorSubject<boolean>;
  private isAdminSubject: BehaviorSubject<boolean>;

  constructor() {
    const isUser = this.getIsAuthUser();
    const isAdmin = this.getIsAuthAdmin();

    this.isUserSubject = new BehaviorSubject<boolean>(isUser);
    this.isAdminSubject = new BehaviorSubject<boolean>(isAdmin);
  }

  onChangeRole(role: string) {
    if (role === 'user') {
      this.isAdminSubject.next(false);
      this.isUserSubject.next(true);
    }
    if (role === 'admin') {
      this.isUserSubject.next(false);
      this.isAdminSubject.next(true);
    }
  }

  getIsAuthUser(): boolean {
    return JSON.parse(localStorage.getItem(STORAGE_USER) || 'false');
  }

  getIsAuthAdmin(): boolean {
    return JSON.parse(localStorage.getItem(STORAGE_ADMIN) || 'false');
  }

  getIsUserObservable() {
    return this.isUserSubject.asObservable();
  }

  getIsAdminObservable() {
    return this.isAdminSubject.asObservable();
  }

  loginUser(): void {
    this.isUserSubject.next(true);
    this.isAdminSubject.next(false);
    this.updateLocalStorage();
  }

  loginAdmin(): void {
    this.isAdminSubject.next(true);
    this.isUserSubject.next(false);
    this.updateLocalStorage();
  }

  logout(): void {
    this.isUserSubject.next(false);
    this.isAdminSubject.next(false);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    localStorage.setItem(
      STORAGE_USER,
      JSON.stringify(this.isUserSubject.value)
    );
    localStorage.setItem(
      STORAGE_ADMIN,
      JSON.stringify(this.isAdminSubject.value)
    );
  }
}
