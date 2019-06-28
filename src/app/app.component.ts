import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalPhotos;
  photos;
  show: boolean;
  error: string;
  totalArray = [];

  getPhoto(photos) {
    if(photos) {
      this.totalPhotos = photos;
      const totalPages = this.getTotalPages(photos);
      this.totalArray = this.createTotalPageArray(totalPages);
      const photos2 = photos;
      this.photos = photos.filter(photo => {
        return photos2.indexOf(photo) < 16;
      })
    }
  }

  showSpinner(show) {
    this.show = show;
  }

  displayError(error) {
    this.error = error;
  }
  getTotalPages(photos) {
    let quotient = Math.floor(photos.length/16);
    let reste = photos.length%16;
    return reste == 0 ? quotient : quotient+1;
  }
  createTotalPageArray(totalPages) {
    let pageArray = [];
    for(let i=0; i<totalPages; i++) {
        pageArray.push(i);
    }
    return pageArray;
  }
  displayPage(index) {
    const min = 16*index;
    const max = 16*index+15;
    let photoArray = this.totalPhotos;
    this.photos = this.totalPhotos.filter(photo => {
      return photoArray.indexOf(photo) >= min && photoArray.indexOf(photo) <= max;
    })
    console.log(this.photos);
  }
}
