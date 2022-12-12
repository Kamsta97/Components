import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";

const getAuthorsState = createFeatureSelector<AuthorsState>('AuthorsState')

export const getAddedAuthor = createSelector(
    getAuthorsState,
    (state: AuthorsState) => state.addedAuthor
)

export const getAuthors = createSelector(
    getAuthorsState,
    (state: AuthorsState) => state.authors
)