import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  @Output() triggerPhoto = new EventEmitter();
  @Output() triggerSpinner = new EventEmitter();
  @Output() triggerError = new EventEmitter();

  sol: number;
  camera: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchPhoto() {
    this.triggerSpinner.emit(true);
    this.triggerPhoto.emit(null);
    this.triggerError.emit();
    const photoObservable$ = this.api.getPhoto(this.sol, this.camera);

    photoObservable$.subscribe(response => {
      if(response['success']) {
        const photos = response['data'].photos;
        this.triggerSpinner.emit(false);
        this.triggerPhoto.emit(photos);
      } else {
          this.triggerSpinner.emit(false);
          this.triggerError.emit(response['err']);
        };

    },
    err => console.log(err));
  }

}
