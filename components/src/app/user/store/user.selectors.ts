import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

const getUserState = createFeatureSelector<UserState>('UserState')

export const getName = createSelector(
    getUserState,
    (state: UserState) => state.name
)

export const getIsAdmin = createSelector(
    getUserState,
    (state: UserState) => state.isAdmin
)