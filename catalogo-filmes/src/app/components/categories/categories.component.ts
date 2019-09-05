import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  genresMovies: any;
  id: any;

  constructor(private moviedbService: MoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {
    this.moviedbService.moviesGenre(this.id)
    .subscribe(({results}: any) => {
      this.genresMovies = results;
    });
  }

}
