import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./favourites.component.css'], //We can use both file and parameters
  styles: [
  `
    .bi-star-fill {
      color: green;
    }
  ` 
  ], // If this is last then this style is applied
  inputs: ['title'] // Disadvantage to this approach of magic string is 
                    //whenever we change name we have to change here as well
})
export class FavouritesComponent {
  @Input('isFavorite') isSelected = false;
  title = '';
  @Output('change') click = new EventEmitter();

  onFavouriteClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ isFavorite: this.isSelected });
  }
}
