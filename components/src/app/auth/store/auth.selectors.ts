import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

const getAuthState = createFeatureSelector<AuthState>('AuthState')

export const isAuth = createSelector(
    getAuthState,
    (state: AuthState) => state.isAuth
)

export const getToken = createSelector(
    getAuthState,
    (state: AuthState) => state.token
)

export const getErrorMessage = createSelector(
    getAuthState,
    (state: AuthState) => state.errorMessage
)