import { Component, Input } from '@angular/core';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  inputs: ['title'] // Disadvantage to this approach of magic string is 
                    //whenever we change name we have to change here as well
})
export class FavouritesComponent {
  @Input('isFavorite') isSelected = false;
  title = '';

  constructor() { 
  }

  onFavouriteClick() {
    this.isSelected = !this.isSelected;
  }
}
