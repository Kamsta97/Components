import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

const getCoursesState = createFeatureSelector<CoursesState>('CoursesState')

export const getAllCourses = createSelector(
    getCoursesState,
    (state: CoursesState) => state.courses
)