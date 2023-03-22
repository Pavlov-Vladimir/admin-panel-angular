import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ADMIN_TOKEN: string = 'fdsbsbsdbsgbpjt5wibnwIPBI4t4';

  constructor(private router: Router) {}

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  login(userInfo: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (
      userInfo.email === 'admin@mail.com' &&
      userInfo.password === 'admin123'
    ) {
      this.setToken(this.ADMIN_TOKEN);
      return of(true);
    }
    return throwError(() => new Error('Failed Login'));
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
