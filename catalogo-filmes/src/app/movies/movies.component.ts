import { Component, OnInit } from '@angular/core';

import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  movies: Array<any>;

  constructor(private moviesService: MovieDbService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.moviesService.getMovie().subscribe(dados => this.movies = dados);
  }

}
