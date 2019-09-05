import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviedbService } from './../../services/moviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchs: any;
  query: any;

  constructor(private moviedbService: MoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.query = res.query);
  }

  ngOnInit() {
    this.moviedbService.search(this.query)
    .subscribe(({results}: any) => {
      this.searchs = results;
    });
  }

}
