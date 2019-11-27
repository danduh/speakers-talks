import { createSelector } from '@ngrx/store';

export interface AuthState {
  profile: number;
}

export interface AppState {
  AUTH: AuthState;
}

export const selectFeature = (state: AppState) => state.AUTH;

export const selProfile = createSelector(selectFeature, (state: AuthState) => state.profile);
