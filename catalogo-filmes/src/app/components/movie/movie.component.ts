import { Component, OnInit } from '@angular/core';

import { MoviedbService } from './../../services/moviedb.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  popular: any;
  movies: any;

  constructor(private moviedbService: MoviedbService) { }

  ngOnInit() {
    this.moviedbService.getMovie()
      .subscribe(dados => {
        console.log(dados);
        this.popular = dados;

        this.movies = this.popular.results;
      });
  }

}
