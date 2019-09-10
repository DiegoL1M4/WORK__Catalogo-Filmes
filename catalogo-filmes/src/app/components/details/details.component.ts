import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviedbService } from 'src/app/services/moviedb.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: any;
  id: any;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(
    private router$: ActivatedRoute,
    private moviedbService$: MoviedbService) {

    this.router$.params.subscribe(res => this.id = res.id);
  }

  ngOnInit() {

    this.moviedbService$.getMovie(this.id)
    .subscribe((data: Movie) => {
      this.movie = data;
    });

  }

}
