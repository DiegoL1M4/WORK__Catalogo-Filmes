import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private urlMovie = 'https://api.themoviedb.org/3';
  private apiKey = 'api_key=1f572d4eeb91cf40b81c28fd4af4c3e4';

  constructor(private http: HttpClient) { }


  private urlTeste = 'https://api.themoviedb.org/3/movie/popular?api_key=1f572d4eeb91cf40b81c28fd4af4c3e4&language=pt-BR&page=1';
  getMovie() {
    return this.http.get<any[]>(this.urlTeste);
  }


  populars() {
    const url = `${this.urlMovie}/movie/popular?${this.apiKey}&language=pt-br&page=1`;
    return this.http.get<any[]>(url);
  }

  search(query: string) {
    const url = `${this.urlMovie}/search/movie?${this.apiKey}&language=pt-br&query=${query}&page=1&include_adult=false`;
    return this.http.get<any[]>(url);
  }

  genres() {
    const url = `${this.urlMovie}/genre/movie/list?${this.apiKey}&language=pt-br`;
    return this.http.get<any[]>(url);
  }

  moviesGenre(idGenre: string) {
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMovie}/discover/movie?${this.apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idGenre}`;
    return this.http.get<any[]>(url);
  }

}
