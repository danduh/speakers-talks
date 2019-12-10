import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppAuthService } from './app-auth-service';

@Injectable()
export class AppAuthGuard implements CanActivate {
  constructor(private appAuthService: AppAuthService,
              private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (!this.appAuthService.isLoggedIn()) {
      console.log('user NOt logged in');
      this.router.navigate(['/']);
    } else {
      console.log('user IS logged in');
      return true;
    }
  }
}
