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
  pager: number;
  maxPager: number;

  getPhoto(photos) {
    if(photos) {
      this.totalPhotos = photos;
      const totalPages = this.getTotalPages(photos, 16);
      this.totalArray = this.createTotalPageArray(totalPages);
      const photos2 = photos;
      this.photos = photos.filter(photo => {
        return photos2.indexOf(photo) < 16;
      })
      this.pager = 0;
      this.maxPager = Math.floor(totalPages/5);
      console.log(this.maxPager);
    }
  }

  showSpinner(show) {
    this.show = show;
  }

  displayError(error) {
    this.error = error;
  }
  getTotalPages(photos, num) {
    let quotient = Math.floor(photos.length/num);
    let reste = photos.length%num;
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
  }
  increasePage() {
    this.pager++;
    console.log(this.pager)
  }
  decreasePage() {
    this.pager--;
    console.log(this.pager);
  }
}
