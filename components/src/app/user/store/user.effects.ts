import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

@Injectable()
export class UserEffects {

    getCurrentUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestCurrentUser),
            mergeMap(() => this.userService.getUser('test').pipe(
                    map(user => requestCurrentUserSuccess({name: user.name, isAdmin: false})),
                    catchError((user) => of(requestCurrentUserFail({name: user.name, isAdmin: false})))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {

    }
}