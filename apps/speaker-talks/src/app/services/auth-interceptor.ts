import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '@st-environment/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem(environment.AUTH_KEY.token);

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${JSON.parse(idToken)}`)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
