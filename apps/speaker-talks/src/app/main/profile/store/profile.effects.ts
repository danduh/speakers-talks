import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { registerSuccess } from '../../../auth/store/auth.actions';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class ProfileEffects {
  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType('[PROFILE] Update'),
    tap(console.log),
    mergeMap((action) => {
      return this.profileService.updateOne(action.payload)
        .pipe(
          map((resp) => {
            console.log(resp);
            return registerSuccess(resp);
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
