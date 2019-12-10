import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { login, loginSuccess, register, registerSuccess } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    mergeMap((action) => {
      return this.authService.register(action.payload)
        .pipe(
          map((payload) => {
            return registerSuccess({ payload });
          })
        );
    })
  ), { dispatch: true });

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    mergeMap((action) => {
      return this.authService.login(action.payload)
        .pipe(
          map((payload) => {
            return loginSuccess({ payload });
          })
        );
    })
  ));

  postLogin$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap((action) => {
      return this.router.navigate(['/main/profile', action.payload.user._id]);
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }
}
