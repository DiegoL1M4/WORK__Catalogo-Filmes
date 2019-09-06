import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  genresMovies: any;
  genre: string;
  id: any;
  page: string;
  items = [2, 3];

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router, private moviedbService: MoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe((res) => {this.id = res.id; this.genre = res.name; this.page = res.page; });
  }

  ngOnInit() {
    this.moviedbService.moviesGenre(this.id, this.page)
    .subscribe(({results}: any) => {
      this.genresMovies = results;
    });
  }

  pagination(item: string) {
    this.router.navigate(['/'], {});
    this.router.navigate(['/' + window.location.pathname + item], {});
  }

}
