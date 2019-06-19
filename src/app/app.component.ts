import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos;
  show: boolean;

  getPhoto(photos) {
    this.photos = photos;
  }
  showSpinner(show) {
    this.show = show;
  }
}
