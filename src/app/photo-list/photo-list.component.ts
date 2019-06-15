import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.8s',
    gutter: 8,
    columnWidth: 300,
  };
  photos;
  photoObservable$;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.photoObservable$ = this.apiService.getPhotos();
    this.photoObservable$.subscribe(data => {
      this.photos = data.photos;
      console.log(this.photos);
    });
  }

}
