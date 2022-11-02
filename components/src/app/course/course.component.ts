import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  course?: Course;

  loggedIn: boolean = false;
  
  constructor() { 
    this.loggedIn = localStorage.getItem('user') ? true: false;
  }

  ngOnInit(): void {
  }


}
