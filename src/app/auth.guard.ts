import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if(this.AuthService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
