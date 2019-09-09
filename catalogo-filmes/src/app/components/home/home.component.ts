import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router, private moviedbService: MoviedbService) { }

  ngOnInit() {
    this.moviedbService.populars()
    .subscribe(({results}: any) => {
      this.movies = results;
    });
  }

  open(movie: any) {
    this.router.navigate(['/details/' + movie.id]);
  }

}
