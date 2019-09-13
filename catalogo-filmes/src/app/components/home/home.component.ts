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
  totalPages: number;

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

        this.totalPages = data.total_pages;
      });
    });
  }

  pagination(page: any) {
    this.page = page;
    this.router$.navigate(['/home/'  + this.page]);
  }

}
