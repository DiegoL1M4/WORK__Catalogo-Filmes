import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { MoviedbService } from './../../services/moviedb.service';
import { Movie } from './../../interfaces/movie';
import { Pesquisa } from './../../interfaces/pesquisa';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies: any;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router, private moviedbService: MoviedbService) { }

  ngOnInit() {
    /*
    this.moviedbService.populars()
    .subscribe(({results}: any) => {
      this.movies = results;
    });

    this.moviedbService.search('vingadores')
    .subscribe(({results}: any) => {
      this.movies = results;
    });

    this.moviedbService.moviesGenre('28', '1')
    .subscribe(({results}: any) => {
      this.movies = results;
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
