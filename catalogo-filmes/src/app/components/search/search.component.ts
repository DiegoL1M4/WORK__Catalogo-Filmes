import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { debounceTime, timeout } from 'rxjs/operators';

import { MoviedbService } from './../../services/moviedb.service';
import { Pesquisa } from './../../interfaces/pesquisa';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: any = [];
  query: any;
  page = 1;
  totalPages: number;
  load = false;

  constructor(
    private router$: Router,
    private moviedbService$: MoviedbService,
    private route$: ActivatedRoute) { }

  ngOnInit() {

    this.route$.url.pipe(
      debounceTime(300)
    ).subscribe(url => {
      this.route$.paramMap
        .subscribe((params: ParamMap) => {this.query = params.get('query'); });

      this.moviedbService$.search(this.query, this.page)
      .subscribe((data: Pesquisa) => {
        this.movies = data.results;
        this.load = true;

        this.totalPages = data.total_pages;
      });
     });

  }

  pagination(page: any) {
    this.page = page;
    this.router$.navigate(['/search/' + this.query + '/' + this.page]);
  }

}
