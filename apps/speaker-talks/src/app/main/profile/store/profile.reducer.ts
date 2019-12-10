import { createReducer, on } from '@ngrx/store';
import { profileSuccess } from './profile.actions';

const initialState = null;
const reducer = createReducer(
  initialState,
  on(profileSuccess, (state, { payload }) => ({ ...state, ...payload }))
);

export function profileReducer(state, action) {
  return reducer(state, action);
}
