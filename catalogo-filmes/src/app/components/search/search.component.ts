import { Pesquisa } from './../../interfaces/pesquisa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, map } from 'rxjs/operators';

import { MoviedbService } from './../../services/moviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: any = [];
  query: any;

  total: any;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(
    private moviedbService$: MoviedbService,
    private route$: ActivatedRoute) { }

  ngOnInit() {
    this.route$.paramMap
      .subscribe((params: ParamMap) => {this.query = params.get('query'); });

    this.moviedbService$.search(this.query)
    .subscribe((data: Pesquisa) => {
      this.movies = data.results;
    });

  }

}
