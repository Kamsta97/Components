import { createAction, props } from "@ngrx/store";

export const requestCurrentUser = createAction(
    '[Request User] Request user',
    props<{ name: string; isAdmin: boolean }>()
)

export const requestCurrentUserSuccess = createAction(
    '[Request User Success] Request user success',
    props<{ name: string; isAdmin: boolean }>()
)

export const requestCurrentUserFail = createAction(
    '[Request User Fail] Request user fail',
    props<{ name: string; isAdmin: boolean }>()
)
