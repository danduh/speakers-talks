import { createReducer, on } from '@ngrx/store';
import { registerFailed, registerSuccess } from '../auth/store/auth.actions';

const initialState = null;
const reducer = createReducer(initialState,
);

export function appReducer(state, action) {
  return reducer(state, action);
}
