import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { AuthorsService } from "src/app/services/authors.service";
import { UserService } from "src/app/services/user.service";
import { requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from "./authors.actions";

@Injectable()
export class AuthEffects {

    getAuthors$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestAuthors),
            mergeMap((data) => this.authorsService.getAll().pipe(
                    map(authors => requestAuthorsSuccess({authors: authors})),
                    catchError(() => of(requestAuthorsFail({authors: []})))
                )
            )
        )
    )

    addAuthor$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestAddAuthor),
            mergeMap((data) => this.authorsService.addAuthor(data.author).pipe(
                map(added => requestAddAuthorSuccess({author: data.author})),
                catchError(() => of(requestAddAuthorFail()))
            ))
        ))

    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService
    ) {

    }
}