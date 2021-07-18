import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  template: `<h2>{{ title }}</h2>
             <ul>
                <li *ngFor="let author of authors">
                  {{ author }}
                </li>
             </ul>
            `,
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent implements OnInit {
  title = 'Authors';
  authors;

  constructor(authorService: AuthorsService) { 
    this.authors = authorService.getAuthors();
  }

  ngOnInit(): void {
  }

}
