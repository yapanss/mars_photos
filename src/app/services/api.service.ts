import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getPhoto(sol, camera) {
    return this.http.get(`/photos?sol=${sol}&camera=${camera}`);
  }
}
