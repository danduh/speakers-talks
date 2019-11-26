import { createReducer, on } from '@ngrx/store';
import { registerFailed, registerSuccess } from '../auth/store/auth.actions';

const initialState = null;
const _appReducer = createReducer(initialState,
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
