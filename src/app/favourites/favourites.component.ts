import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() change = new EventEmitter();

  constructor() { 
  }

  onFavouriteClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ isFavorite: this.isSelected });
  }
}
