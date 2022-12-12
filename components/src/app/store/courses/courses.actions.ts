import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/models/author";
import { Course } from "src/app/models/course";

export const requestAllCourses = createAction(
    '[Request All Courses] Request all courses',
    props<{courses: Course[]}>()
)

export const requestAllCoursesSuccess = createAction(
    '[Request All Courses Success] Request all courses success',
    props<{ courses: Course[];}>()
)

export const requestAllCoursesFail = createAction(
    '[Request All Courses Fail] Request all courses fail'
)

