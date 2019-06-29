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
  photos;
  spinner: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchPhoto() {
    if(!this.sol || !this.camera) {
      alert('Please fill in all the query items !');
    }
    else {
      this.spinner = true;
      this.triggerSpinner.emit(this.spinner);
      this.triggerPhoto.emit(null);
      this.triggerError.emit();
      const photoObservable$ = this.api.getPhoto(this.sol, this.camera);

      photoObservable$.subscribe(response => {
        if(response['success']) {
          this.spinner = false;
          this.photos = response['data'].photos;
          this.triggerSpinner.emit(this.spinner);
          this.triggerPhoto.emit(this.photos);
        } else {
            this.spinner = false;
            this.triggerSpinner.emit(this.spinner);
            this.triggerError.emit(response['err']);
          };

      },
      err => console.log(err));
  }

    }

}
