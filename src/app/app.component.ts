import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos;
  show: boolean;
  error: string;

  getPhoto(photos) {
    this.photos = photos;
  }
  showSpinner(show) {
    this.show = show;
  }
  displayError(error) {
    this.error = error;
  }
}
