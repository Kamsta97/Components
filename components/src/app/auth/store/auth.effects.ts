import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { AuthService } from "../services/auth.service";
import { requestLogin, requestLoginFail, requestLoginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestLogin),
            mergeMap((data) => this.authService.login(data.name , data.password).pipe(
                    map(cred => requestLoginSuccess({isAuth: cred.isAuth, token: cred.token})),
                    catchError((cred) => of(requestLoginFail({isAuth: cred.isAuth, token: cred.token, errorMessage: 'error'})))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {

    }
}