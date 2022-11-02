import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : Course[];

  constructor() { 
    this.courses = [{
      title: 'Test1',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      creationDate: '01-01-2022',
      authors:['test1', 'test2'],
      duration: '1 hour'
    }, 
    {
      title: 'Test2',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      creationDate: '01-01-2022',
      authors:['test1', 'test2'],
      duration: '1 hour'
    },
    {
      title: 'Test3',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      creationDate: '01-01-2022',
      authors:['test1', 'test2'],
      duration: '1 hour'
    }];
  }

  ngOnInit(): void {
    
  }

  addNewCourse() {

  }

}
