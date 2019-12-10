import { createAction, props } from '@ngrx/store';
import { User } from '@shared-interfaces';

export const profileLoad = createAction(
  '[PROFILE] Load',
  props<{ payload: User }>()
);
export const profileUpdate = createAction(
  '[PROFILE] Update',
  props<{ payload: User }>()
);
export const profileSuccess = createAction(
  '[PROFILE] Success',
  props<{ payload: User }>()
);
export const profileFailed = createAction(
  '[PROFILE] Failed',
  props<{ payload: User }>()
);
