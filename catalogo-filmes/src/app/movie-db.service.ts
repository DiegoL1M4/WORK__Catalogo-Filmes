import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  url = 'https://api.themoviedb.org/3/movie/550?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4';

  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get<any[]>(`${this.url}`);
  }
}
