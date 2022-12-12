import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getAllCourses() {
    let course1 = new Course()
    let course2 = new Course();
    let listOfCourses: Course[] = [];
    listOfCourses.push(course1);
    listOfCourses.push(course2)
    return of(listOfCourses);
  }
}
