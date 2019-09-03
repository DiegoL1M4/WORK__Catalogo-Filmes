import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private url = 'https://api.themoviedb.org/3/movie/popular?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4&language=pt-BR&page=1';

  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get<any[]>(this.url);
  }
}
