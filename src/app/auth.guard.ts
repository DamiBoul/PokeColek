import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
    private AuthService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    return this.afAuth.authState.pipe(
      take(1),
      map(authState => {
        if (!authState) {
this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
