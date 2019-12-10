import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { registerSuccess } from '../../../auth/store/auth.actions';
import { ProfileService } from '../services/profile.service';
import { profileLoad, profileSuccess, profileUpdate } from './profile.actions';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType(profileLoad),
    mergeMap((action) => {
      return this.profileService.getOne(action.payload._id)
        .pipe(
          map((resp) => {
            return profileSuccess({ payload: resp });
          })
        );
    })
  ));

  createProfile$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccess),
    mergeMap((action) => {
      return this.profileService.create(action.payload)
        .pipe(
          map((payload) => {
            return profileSuccess({ payload });
          })
        );
    })
  ));

  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType(profileUpdate),
    mergeMap((action) => {
      return this.profileService.updateOne(action.payload)
        .pipe(
          map((payload) => {
            return profileSuccess({ payload });
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private router: Router) {
  }

}
