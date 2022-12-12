import { Action, createReducer, on } from "@ngrx/store"
import { reducers } from "src/app/store"
import { requestCurrentUserSuccess } from "./user.actions"

export const userFeatureKey = 'UserState'

export interface UserState {
    isAdmin: boolean,
    name: string
}

export const initialState: UserState  =  {
    isAdmin: false,
    name: ''
}

export const reducer = createReducer(
    initialState,
    on(requestCurrentUserSuccess, (state, {isAdmin, name}) => ({
        ...state, isAdmin: isAdmin, name: name
    })))

export const userReducer = (state: UserState, action: Action) : UserState => reducer(state, action);


