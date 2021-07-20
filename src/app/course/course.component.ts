import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  imageURL = "";
  post = {
    isFavorite: true,
    title: "Course"
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSaveClick() {

  }

}
