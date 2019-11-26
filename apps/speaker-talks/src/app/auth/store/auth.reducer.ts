import { createReducer, on } from '@ngrx/store';
import { loginSuccess, register, registerFailed, registerSuccess } from './auth.actions';
import { AuthDetailsInterface, User } from '@shared-interfaces';

export interface AuthRegisterState extends User {
  errorMsg?: string;
}

const initialState: AuthRegisterState = {
  username: null,
  firstName: null,
  lastName: null,
};

const reducer = createReducer(initialState,
  on(loginSuccess, (state, action: any) => {
    return { ...state, ...action.payload };
  }),
  on(registerFailed, (state, action: any) => {
    state.errorMsg = action.errorMsg;
    return state;
  })
);

export function registrationReducer(state, action) {
  return reducer(state, action);
}
