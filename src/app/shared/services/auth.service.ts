import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { environment } from '../../../environments/environment.development';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';

const STORAGE_ADMIN = 'Admin';
const STORAGE_USER = 'User';
const STORAGE_USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private afAuth = inject(AngularFireAuth);
  private http = inject(HttpClient);
  private afs = inject(AngularFirestore);

  private isUserSubject!: BehaviorSubject<boolean>;
  private isAdminSubject!: BehaviorSubject<boolean>;
  user$: BehaviorSubject<firebase.User | null> =
    new BehaviorSubject<firebase.User | null>(null);
  userIdUrl = `${environment.backendUrl}/userid`;

  constructor() {
    this.initializeUserData();
    this.initializeRoleData();
  }
  getUserData() {
    return this.user$.value;
  }
  private initializeUserData() {
    const storedUser = JSON.parse(
      localStorage.getItem(STORAGE_USER_KEY) || 'null'
    );

    if (!storedUser) {
      this.afAuth.authState.subscribe((user) => {
        this.user$.next(user);
        localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
        if (user) {
          this.setUserData(user);
        }
      });
    } else {
      this.user$.next(storedUser);
    }
  }

  private initializeRoleData() {
    const isAdminRole = JSON.parse(
      localStorage.getItem(STORAGE_ADMIN) || 'false'
    );
    const isUserRole = JSON.parse(localStorage.getItem(STORAGE_USER) || 'true');

    this.isUserSubject = new BehaviorSubject<boolean>(isUserRole);
    this.isAdminSubject = new BehaviorSubject<boolean>(isAdminRole);
  }

  getUserId(): Observable<any> {
    return this.http.get(this.userIdUrl);
  }

  onChangeRole(role: string) {
    if (role === STORAGE_USER) {
      this.isUserSubject.next(true);
      this.isAdminSubject.next(false);
    } else {
      this.isAdminSubject.next(true);
      this.isUserSubject.next(false);
    }
    this.updateLocalStorage();
  }

  getIsUserObservable(): Observable<boolean> {
    return this.isUserSubject.asObservable();
  }

  getIsAdminObservable(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }

  async loginUser(): Promise<void> {
    const currentUser = await this.afAuth.currentUser;
    if (currentUser) this.onChangeRole(STORAGE_USER);
  }

  async loginAdmin(): Promise<void> {
    const currentUser = await this.afAuth.currentUser;
    if (currentUser) this.onChangeRole(STORAGE_ADMIN);
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
    const user = JSON.parse(localStorage.getItem(STORAGE_USER_KEY)!);
    return user !== null && user.emailVerified !== false;
  }

  async authLogin(provider: firebase.auth.AuthProvider): Promise<void> {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      await this.handleAuthSuccess(result.user, 'user');
    } catch (error) {
      console.error('Auth login error: ', error);
      alert(error);
    }
  }

  private async setUserData(user: firebase.User): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    await userRef.set(userData, { merge: true });
  }

  logout(): void {
    this.afAuth
      .signOut()
      .then(() => {
        this.isUserSubject.next(true);
        this.isAdminSubject.next(false);
        this.user$.next(null);
        localStorage.removeItem(STORAGE_USER_KEY);
        this.updateLocalStorage();
      })
      .catch((error) => {
        console.error('Logout error: ', error);
      });
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
