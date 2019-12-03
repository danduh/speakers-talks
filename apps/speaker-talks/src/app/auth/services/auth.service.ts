import { HttpClient } from '@angular/common/http';
import { AuthDetailsInterface } from '@shared-interfaces';
import { from, Observable } from 'rxjs';
import { LoginResponse } from '@shared-interfaces';
import { map, tap } from 'rxjs/operators';
import { environment } from '@st-environment/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;

export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient,
              public afAuth: AngularFireAuth) {

  }

  private postLogin(response: LoginResponse) {
    localStorage.setItem(environment.AUTH_KEY.token, JSON.stringify(response.token.accessToken));
    const expiresAt = Date.now() + response.token.expiresIn;
    localStorage.setItem(environment.AUTH_KEY.exp, JSON.stringify(expiresAt));
  }

  public register(authDetails: AuthDetailsInterface) {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(authDetails.username, authDetails.password)
      .then((authState: UserCredential) => {
        console.log(authState);
        return authState;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      }));

    // return this.http.post(this.baseUrl + '/api/auth/register', authDetails);
  }

  public login(authDetails: AuthDetailsInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + '/api/auth/login', authDetails)
      .pipe(
        tap(this.postLogin.bind(this))
      );
  }
}
