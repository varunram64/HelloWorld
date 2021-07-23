import { Component, Input } from '@angular/core';

@Component({
  selector: 'bootstrap-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isActive: boolean = false;
  @Input() likesCount: number = 0;
  
  constructor() { }

  onLiked() {
    this.isActive = !this.isActive;
    this.likesCount += this.isActive ? +1 : -1;
    console.log(`Active ${this.isActive}, likesCount ${this.likesCount}`);
  }
}
