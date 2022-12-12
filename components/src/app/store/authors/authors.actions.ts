import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/models/author";

export const requestAuthors = createAction(
    '[Request Authors] Request authors',
    props<{ authors: Author[];}>()
)

export const requestAuthorsSuccess = createAction(
    '[Request Authors Success] Request authors success',
    props<{ authors: Author[];}>()
)

export const requestAuthorsFail = createAction(
    '[Request Authors Fail] Request authors fail',
    props<{ authors: Author[];}>()
)

export const requestAddAuthor = createAction(
    '[Request Add Author] Request add author',
    props<{ author: Author;}>()
)

export const requestAddAuthorSuccess = createAction(
    '[Request Add Author Success] Request add author success',
    props<{ author: Author}>()
)

export const requestAddAuthorFail = createAction(
    '[Request AddAuthor Fail] Request add author fail'
)
