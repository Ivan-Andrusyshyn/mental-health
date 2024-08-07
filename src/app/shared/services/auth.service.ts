import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, switchMap, take } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

import { environment } from '../../../environments/environment.development';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../models/user.model';
import {
  STORAGE_ADMIN_ROLE,
  STORAGE_USER_ROLE,
  STORAGE_USER_DATA,
} from '../../configs/storage-keys';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private afAuth = inject(AngularFireAuth);
  private http = inject(HttpClient);
  private afs = inject(AngularFirestore);

  private isUserSubject!: BehaviorSubject<boolean>;
  private isAdminSubject!: BehaviorSubject<boolean>;
  user$: BehaviorSubject<UserData | null> =
    new BehaviorSubject<UserData | null>(null);
  userIdUrl = `${environment.backendUrl}/userid`;

  constructor() {
    this.initializeUserData();
    this.initializeRoleData();
  }
  getUserData() {
    return this.user$.value;
  }
  getUserDataObservable() {
    return this.user$.asObservable();
  }
  private initializeUserData() {
    const storedUser = localStorage.getItem(STORAGE_USER_DATA);
    if (!storedUser) return;
    const parsedStoredUser = JSON.parse(storedUser);
    if (!storedUser) {
      this.afAuth.authState.subscribe((user) => {
        if (!user) return;
        const userData: UserData = this.changeUserData(user);

        this.user$.next(userData);
        localStorage.setItem(STORAGE_USER_DATA, JSON.stringify(user));
        if (user) {
          this.setUserData(user);
        }
      });
    } else {
      this.user$.next(parsedStoredUser);
    }
  }

  private initializeRoleData() {
    const isAdminRole = JSON.parse(
      localStorage.getItem(STORAGE_ADMIN_ROLE) || 'false'
    );
    const isUserRole = JSON.parse(
      localStorage.getItem(STORAGE_USER_ROLE) || 'false'
    );

    this.isUserSubject = new BehaviorSubject<boolean>(isUserRole);
    this.isAdminSubject = new BehaviorSubject<boolean>(isAdminRole);
  }

  getUserId(): Observable<any> {
    return this.user$.pipe(
      filter((user: any) => !!user),
      take(1),
      switchMap((user) => {
        const userIdUrl = `${environment.backendUrl}/${user?.uid}`;
        return this.http.get(userIdUrl);
      })
    );
  }

  onChangeRole(role: string) {
    if (role === STORAGE_USER_ROLE) {
      this.isUserSubject.next(true);
      this.isAdminSubject.next(false);
    } else {
      this.isAdminSubject.next(true);
      this.isUserSubject.next(false);
    }
    localStorage.setItem(
      STORAGE_USER_ROLE,
      JSON.stringify(this.isUserSubject.value)
    );
    localStorage.setItem(
      STORAGE_ADMIN_ROLE,
      JSON.stringify(this.isAdminSubject.value)
    );
  }

  getIsUserObservable(): Observable<boolean> {
    return this.isUserSubject.asObservable();
  }

  getIsAdminObservable(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }

  async loginUser(): Promise<void> {
    const currentUser = await this.afAuth.currentUser;
    if (currentUser) this.onChangeRole(STORAGE_USER_ROLE);
  }

  async loginAdmin(): Promise<void> {
    const currentUser = await this.afAuth.currentUser;
    if (currentUser) this.onChangeRole(STORAGE_ADMIN_ROLE);
  }

  async signIn(email: string, password: string, role: string): Promise<void> {
    const currentUser = await this.afAuth.currentUser;
    if (currentUser) {
      alert('User is already logged in.');
      return;
    }

    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      await this.handleAuthSuccess(result.user, role);
    } catch (error: any) {
      console.error('Login error: ', error);
      alert(error.message);
    }
  }

  async signUp(
    email: string,
    password: string,
    displayName: string,
    role: string
  ): Promise<void> {
    try {
      const currentUser = await this.afAuth.currentUser;
      if (currentUser) {
        alert('User is already logged in.');
        return;
      }
      const signInMethods = await this.afAuth.fetchSignInMethodsForEmail(email);
      if (signInMethods.length > 0) {
        alert('User already exists.');
        return;
      }
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await result.user?.updateProfile({ displayName: displayName });
      await this.handleAuthSuccess(result.user, role);
    } catch (error: any) {
      console.error('Registration error: ', error);
      alert(error.message);
    }
  }

  private async handleAuthSuccess(
    user: firebase.User | null,
    role: string
  ): Promise<void> {
    if (user) {
      await this.setUserData(user);
      this.onChangeRole(role);
    }
  }

  async forgotPassword(passwordResetEmail: string): Promise<void> {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      alert('Password reset email sent, check your inbox.');
    } catch (error) {
      console.error('Error sending password reset email: ', error);
      alert(error);
    }
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem(STORAGE_USER_DATA);
    if (!user) return false;
    const parsedUserData = JSON.parse(user);
    return parsedUserData !== null && parsedUserData.emailVerified !== false;
  }

  private async setUserData(user: firebase.User): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: UserData = this.changeUserData(user);

    this.user$.next(userData);
    await userRef.set(userData, { merge: true });
  }

  changeUserData(user: firebase.User) {
    return {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      emailVerified: user.emailVerified,
    };
  }

  logout(): void {
    this.afAuth
      .signOut()
      .then(() => {
        this.isUserSubject.next(false);
        this.isAdminSubject.next(false);
        this.user$.next(null);
        localStorage.setItem(
          STORAGE_USER_ROLE,
          JSON.stringify(this.isUserSubject.value)
        );
        localStorage.setItem(
          STORAGE_ADMIN_ROLE,
          JSON.stringify(this.isAdminSubject.value)
        );
        localStorage.removeItem(STORAGE_USER_DATA);
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
  }
}
