import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  load = false;

  constructor(
    private moviedbService$: MoviedbService,
    private route$: ActivatedRoute) { }

  ngOnInit() {

    this.route$.url.subscribe(url => {
      this.route$.paramMap
        .subscribe((params: ParamMap) => {this.query = params.get('query'); });

      this.moviedbService$.search(this.query)
      .subscribe((data: Pesquisa) => {
        this.movies = data.results;
        this.load = true;
      });
     });

  }

}
