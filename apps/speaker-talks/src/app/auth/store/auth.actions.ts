import { createAction, props } from '@ngrx/store';
import { AuthDetailsInterface, LoginResponse } from '@shared-interfaces';

export const register = createAction(
  '[AUTH] Register',
  props<{ payload: AuthDetailsInterface }>()
);

export const registerSuccess = createAction(
  '[AUTH] Register Success',
  props<{ payload: AuthDetailsInterface }>()
);

export const registerFailed = createAction('[AUTH] Register Failed',
  props<{ payload: any }>()
);

export const login = createAction(
  '[AUTH] Login',
  props<{ payload: AuthDetailsInterface }>()
);

export const loginSuccess = createAction(
  '[AUTH] Login Success',
  props<{ payload: LoginResponse }>()
);

export const loginFailed = createAction('[AUTH] Login Failed',
  props<{ payload: any }>()
);
