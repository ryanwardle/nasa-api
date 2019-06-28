import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  key = '';

  constructor(private http: HttpClient) { }

  getImageData(): Observable<any> {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`);
  }
}
