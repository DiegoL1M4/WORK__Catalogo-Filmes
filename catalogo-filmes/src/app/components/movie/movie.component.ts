import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MoviedbService } from './../../services/moviedb.service';
import { Movie } from './../../interfaces/movie';
import { Pesquisa } from './../../interfaces/pesquisa';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  populars: any;
  searchs: any;
  genres: any;
  genresMovies: any;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router, private moviedbService: MoviedbService) { }

  ngOnInit() {

    this.moviedbService.populars()
    .subscribe(({results}: any) => {
      this.populars = results;
    });

    this.moviedbService.search('vingadores')
    .subscribe(({results}: any) => {
      this.searchs = results;
    });

    this.moviedbService.genres()
    .subscribe(({genres}: any) => {
      this.genres = genres;
    });

    this.moviedbService.moviesGenre('28')
    .subscribe(({results}: any) => {
      this.genresMovies = results;
    });


    /*
    this.moviedbService.moviesGenre('28')
    .subscribe((data: Pesquisa) => {
      this.genresMovies = data.results;
    });
    */


    /*

      this.moviedbService.populars().pipe(
        pluck("result")
      )
      .subscribe(data => {
        console.log(data);
        this.populars = data;
      });

      this.moviedbService.populars()
      .subscribe((data: any) => {
        this.genres = data.genres;
      });

      this.moviedbService.populars()
      .subscribe(({genres}: any) => {
        this.genres = genres;
      });

    */
  }

  open(popular) {
    this.router.navigate(['/details/' + popular.id]);
  }

}
