import { Component, OnInit, Input } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
//import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
    // transitionDuration: '0.8s',
    gutter: 8,
    columnWidth: 300,
  };
  @Input() photos;
  @Input() spinner;
  @Input() error;

  constructor() { }

  ngOnInit() {
  }

}
