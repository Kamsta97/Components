import { Action, createReducer, on } from "@ngrx/store"
import { reducers } from "src/app/store"
import { requestLoginFail, requestLoginSuccess, requestLogoutSuccess, requestRegisterFail, requestRegisterSuccess } from "./auth.actions"

export const authFeatureKey = 'AuthState'

export interface AuthState {
    isAuth: boolean,
    token: string,
    errorMessage: string
}

export const initialState: AuthState  =  {
    isAuth: false,
    token: '',
    errorMessage: ''
}

export const reducer = createReducer(
    initialState,
    on(requestLoginSuccess, (state, {token, isAuth}) => ({
        ...state, isAuth: isAuth, token: token, errorMessage: ''
    })),
    on(requestLoginFail, (state, {token, isAuth, errorMessage}) => ({
        ...state, isAuth: isAuth, token: 'token', errorMessage: 'Bad credentials'
    })),
    on(requestRegisterSuccess, (state, {name, password}) => ({
        ...state, isAuth: true, token: '', errorMessage: ''
    })),
    on(requestRegisterFail, (state, {name, password}) => ({
        ...state, isAuth: false, token: '', errorMessage: 'Bad request'
    })),
    on(requestLogoutSuccess, (state) => ({
        ...state, isAuth: false, token: '', errorMessage: ''
    }))
)

export const authReducer = (state: AuthState, action: Action) : AuthState => reducer(state, action);


