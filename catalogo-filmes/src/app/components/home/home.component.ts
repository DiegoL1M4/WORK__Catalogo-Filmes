import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MoviedbService } from 'src/app/services/moviedb.service';
import { Pesquisa } from './../../interfaces/pesquisa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any;
  page = 1;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(
    private router$: Router,
    private moviedbService$: MoviedbService,
    private route$: ActivatedRoute) {

    this.route$.params
      .subscribe((res) => this.page = parseInt(res.page, 10));
  }

  ngOnInit() {
    this.route$.url.subscribe(url => {
      this.moviedbService$.populars(this.page.toString())
      .subscribe((data: Pesquisa) => {
        this.movies = data.results;
      });
    });
  }

  open(movie: any) {
    this.router$.navigate(['/details/' + movie.id]);
  }

  pagination(item: string) {
    if (item === '+') {
      this.page += 1;
    } else if (item === '-' && this.page !== 1) {
      this.page -= 1;
    }
    this.router$.navigate(['/home/'  + this.page]);
  }

}
