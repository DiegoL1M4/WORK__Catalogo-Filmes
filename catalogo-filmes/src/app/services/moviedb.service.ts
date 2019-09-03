import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  /* https://api.themoviedb.org/3/movie/424139?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4&language=pt-BR */

  movie = '424139';
  apiKey = '1f572d4eeb91cf40b81c28fd4af4c3e4';
  urlM = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient) { }

  getTitle(id: string) {
    const url = `https://api.themoviedb.org/3/movie/${id}
                ?api_key=${this.apiKey}
                &language=pt-BR`;

    return this.http.jsonp(url, "");
  }
}
