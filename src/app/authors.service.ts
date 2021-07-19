import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  
  constructor() { }

  getAuthors() {
    return [
      {
        title: "The complete Angular Course",
        rating: 4.9032,
        students: 10345,
        price: 145.54,
        releaseDate: new Date(2016, 3, 1)
      }
    ];
  }
}
