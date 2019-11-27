import { createAction } from '@ngrx/store';
import { User } from '@shared-interfaces';

export const profileLoad = createAction('[PROFILE] Load', (payload: User) => ({ payload }));
export const profileUpdate = createAction('[PROFILE] Update', (payload: User) => ({ payload }));
export const profileSuccess = createAction('[PROFILE] Success', (payload: User) => ({ payload }));
export const profileFailed = createAction('[PROFILE] Failed', (payload: User) => ({ payload }));
