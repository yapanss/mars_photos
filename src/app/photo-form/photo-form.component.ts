import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  @Output() triggerPhoto = new EventEmitter();
  @Output() triggerSpinner = new EventEmitter();

  sol: number;
  camera: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchPhoto() {
    this.triggerSpinner.emit(true);
    this.triggerPhoto.emit(null);
    const photoObservable$ = this.api.getPhoto(this.sol, this.camera);
    photoObservable$.subscribe(data => {
      const photos = data['photos'];
      this.triggerSpinner.emit(false);
      this.triggerPhoto.emit(photos);
    });
  }

}
