import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/security/auth.service'
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (isLoggedIn && (state.url === '' || state.url === '/registro')) {
          this.router.navigate(['/perfil']);
          return false;
        } else if (!isLoggedIn && state.url === '/perfil') {
          this.router.navigate(['']);
          return false;
        }
        return true;
      })
    );
  }
}
