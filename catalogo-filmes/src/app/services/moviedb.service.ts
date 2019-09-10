import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pesquisa } from './../interfaces/pesquisa';
import { Movie } from '../interfaces/movie';
import { Genres } from './../interfaces/genres';


@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private urlMovie = 'https://api.themoviedb.org/3';
  private apiKey = 'api_key=1f572d4eeb91cf40b81c28fd4af4c3e4';

  constructor(
    private http: HttpClient) { }

  getMovie(id: any) {
    const url = `${this.urlMovie}/movie/${id}?${this.apiKey}&language=pt-br`;
    return this.http.get<Movie>(url);
  }

  populars(page: string) {
    const url = `${this.urlMovie}/movie/popular?${this.apiKey}&language=pt-br&page=${page}`;
    return this.http.get<Pesquisa>(url);
  }

  search(query: string) {
    const url = `${this.urlMovie}/search/movie?${this.apiKey}&language=pt-br&query=${query}&page=1&include_adult=false`;
    return this.http.get<Pesquisa>(url);
  }

  genres() {
    const url = `${this.urlMovie}/genre/movie/list?${this.apiKey}&language=pt-br`;
    return this.http.get<Genres>(url);
  }

  moviesGenre(idGenre: string, page: string) {
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMovie}/discover/movie?${this.apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${idGenre}`;
    return this.http.get<Pesquisa>(url);
  }

}
