import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
      );
  }

  logout() {
    this.isLoggedIn  = false;
  }
}
