import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { loginSuccess, registerSuccess } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  register$ = createEffect(() => this.actions$.pipe(
    ofType('[AUTH] Register'),
    tap(console.log),
    mergeMap((action) => {
      return this.authService.register(action.payload)
        .pipe(
          map((resp) => {
            console.log(resp);
            return registerSuccess(resp);
          })
        );
    })
  ), { dispatch: false });

  login$ = createEffect(() => this.actions$.pipe(
    ofType('[AUTH] Login'),
    tap(console.log),
    mergeMap((action) => {
      return this.authService.login(action.payload)
        .pipe(
          map((resp) => {
            return loginSuccess(resp.user);
          })
        );
    })
  ));

  postLogin$ = createEffect(() => this.actions$.pipe(
    ofType('[AUTH] Login Success'),
    tap(() => this.router.navigate(['/main/profile']))
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }
}
