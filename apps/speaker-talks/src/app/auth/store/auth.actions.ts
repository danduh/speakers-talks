import { createAction } from '@ngrx/store';
import { AuthDetailsInterface } from '@shared-interfaces';

export const register = createAction('[AUTH] Register',   (payload: AuthDetailsInterface) => ({payload}));
export const registerSuccess = createAction('[AUTH] Register Success', (payload: AuthDetailsInterface) => ({payload}));
export const registerFailed = createAction('[AUTH] Register Failed');

export const login = createAction('[AUTH] Login', (payload: AuthDetailsInterface) => ({payload}));
export const loginSuccess = createAction('[AUTH] Login Success', (payload: AuthDetailsInterface) => ({payload}));
export const loginFailed = createAction('[AUTH] Login Failed');
