import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {map, debounceTime, switchMap, catchError} from 'rxjs/operators';
import { Post } from './model/post';



@Injectable({
  providedIn: 'root'
})
export class SearchService {
  client = '';
  baseUrl = 'http://workingpointapi.test/api/item';

  constructor(private http: HttpClient) { }
  fetchPosts(value: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/${value}`).pipe(catchError(err => of([])));
  }

  getItems() {
    return this.http.get(this.baseUrl);
  }
}

