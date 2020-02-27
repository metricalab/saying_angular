import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SayingData } from '../models/saying.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SayingService implements SayingData {
  constructor(private http: HttpClient) { }

  getDataByAuthor(): Observable<any> {
    return this.http.get('/assets/mock/sayings-by-author.json');
  }

  getData(): Observable<any> {
    return this.http.get('/assets/mock/sayings.json');
  }
}
