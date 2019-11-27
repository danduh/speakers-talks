import { Injectable } from '@angular/core';
import { environment } from '@st-environment/environment';

@Injectable()
export class AppAuthService {
  constructor() {
  }

  isLoggedIn() {
    const expiredAt = localStorage.getItem(environment.AUTH_KEY.exp);
    const token = localStorage.getItem(environment.AUTH_KEY.token);

    if (!!token && !!expiredAt) {
      return Date.now() < parseInt(expiredAt, 10);
    } else {
      return false;
    }
  }
}
