import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  tweet = {
    body: 'Here is the body of a tweet',
    isLiked: true,
    likesCount: 11
  };

  courses: any;

  viewMode = 'map';

  onAdd() {
    this.courses.push({
      id: 3,
      name: 'Course3'
    });
  }

  onDelete(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course: any) {
    let index = this.courses.indexOf(course);
    this.courses[index].name = 'Updated';
  }

  loadCoures() {
    this.courses = [
      {
        id: 1,
        name: 'Course1'
      }, 
      {
        id: 2,
        name: 'Course2'
      }];
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }
}
