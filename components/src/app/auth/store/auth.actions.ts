import { createAction, props } from "@ngrx/store";

export const requestLogin = createAction(
    '[Request Login] Request login',
    props<{ name: string; password: string }>()
)

export const requestLoginSuccess = createAction(
    '[Request Login Success] Request login success',
    props<{ token: string; isAuth: boolean }>()
)

export const requestLoginFail = createAction(
    '[Request Login Fail] Request login fail',
    props<{ token: string; isAuth: boolean; errorMessage?: string}>()
)

export const requestRegister = createAction(
    '[Request Register] Request register',
    props<{ name: string; password: string }>()
)

export const requestRegisterSuccess = createAction(
    '[Request Register Success] Request register success',
    props<{ name: string; password: string }>()
)

export const requestRegisterFail = createAction(
    '[Request Register Fail] Request register fail',
    props<{ name: string; password: string}>()
)

export const requestLogout = createAction(
    '[Request Logout] Request logout'
)

export const requestLogoutSuccess = createAction(
    '[Request Logout Success] Request logout success'
)
