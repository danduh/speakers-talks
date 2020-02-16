import { HttpClient } from '@angular/common/http';
import { AuthDetailsInterface } from '@shared-interfaces';
import { Observable } from 'rxjs';
import { LoginResponse } from '@shared-interfaces';
import { map, tap } from 'rxjs/operators';
import { environment } from '@st-environment/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {

  }

  private postLogin(response: LoginResponse) {
    localStorage.setItem(environment.AUTH_KEY.token, JSON.stringify(response.token.accessToken));
    const expiresAt = Date.now() + response.token.expiresIn;
    localStorage.setItem(environment.AUTH_KEY.exp, JSON.stringify(expiresAt));
  }

  public register(authDetails: AuthDetailsInterface) {
    return this.http.post(this.baseUrl + '/api/auth/register', authDetails);
  }

  public login(authDetails: AuthDetailsInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + '/api/auth/login', authDetails)
      .pipe(
        tap(this.postLogin.bind(this))
      );
  }
}
