import { Component, OnInit } from '@angular/core';

interface FavouriteChangedEventArgs {
  isFavorite: boolean
}

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

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite changed", eventArgs.isFavorite);
  }

}
