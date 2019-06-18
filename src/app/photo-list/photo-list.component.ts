import { Component, OnInit, Input } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
//import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  
  @Input() photos;
  @Input() spinner;
  @Input() error;

  constructor() { }

  ngOnInit() {
  }

}
