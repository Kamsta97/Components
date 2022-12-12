import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { AuthorsService } from "src/app/services/authors.service";
import { CoursesService } from "src/app/services/courses.service";
import { UserService } from "src/app/services/user.service";
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess } from "./courses.actions";

@Injectable()
export class AuthEffects {

    getAllCourses$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestAllCourses),
            mergeMap((data) => this.coursesService.getAllCourses().pipe(
                    map(courses => requestAllCoursesSuccess({courses: courses})),
                    catchError(() => of(requestAllCoursesFail()))
                )
            )
        )
    )


    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) {

    }
}