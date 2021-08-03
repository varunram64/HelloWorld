import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input("title") title: any;
  @Input("description") description: any;

  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
