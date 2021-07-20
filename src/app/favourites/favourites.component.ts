import { Component } from '@angular/core';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  isFavorite = false;

  constructor() { 
  }

  onFavouriteClick() {
    this.isFavorite = !this.isFavorite;
  }
}
