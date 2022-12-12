import { Action, createReducer, on } from "@ngrx/store"
import { Author } from "src/app/models/author"
import { Course } from "src/app/models/course"
import { reducers } from "src/app/store"
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess } from "./courses.actions"

export const coursesFeatureKey = 'CoursesState'

export interface CoursesState {
    courses: Course[],
}

export const initialState: CoursesState  =  {
    courses: []
}

export const reducer = createReducer(
    initialState,
    on(requestAllCoursesSuccess, (state, {courses}) => ({
        ...state, courses: courses
    })),
    on(requestAllCoursesFail, (state) => ({
        ...state, courses: []
    })),
)

export const coursesReducer = (state: CoursesState, action: Action) : CoursesState => reducer(state, action);


