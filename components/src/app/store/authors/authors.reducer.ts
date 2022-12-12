import { Action, createReducer, on } from "@ngrx/store"
import { Author } from "src/app/models/author"
import { reducers } from "src/app/store"
import { requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from "./authors.actions"

export const authorsFeatureKey = 'AuthorsState'

export interface AuthorsState {
    authors: Author[],
    addedAuthor: Author
}

export const initialState: AuthorsState  =  {
    authors: [],
    addedAuthor: {}
}

export const reducer = createReducer(
    initialState,
    on(requestAuthorsSuccess, (state, {authors}) => ({
        ...state, authors: authors, addedAuthor: {}
    })),
    on(requestAuthorsFail, (state, {authors}) => ({
        ...state, authors: [], addedAuthor: {}
    })),
    on(requestAddAuthorSuccess, (state, {author}) => ({
        ...state, addedAuthor: author
    })),
    on(requestAddAuthorFail, (state) => ({
        ...state
    }))
)

export const authorsReducer = (state: AuthorsState, action: Action) : AuthorsState => reducer(state, action);


