import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { tap, map } from 'rxjs/operators';

import { MoviedbService } from 'src/app/services/moviedb.service';
import { Pesquisa } from './../../interfaces/pesquisa';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() movies: any;
  genre: string;
  id: any;
  page: string;
  total: string;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router, private moviedbService: MoviedbService, private route: ActivatedRoute) {
    this.route.params.subscribe((res) => {this.id = res.id; this.page = res.page; });
    this.route.paramMap
      .subscribe((params: ParamMap) => {this.genre = params.get('name'); });
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.moviedbService.moviesGenre(this.id, this.page).pipe(
        tap((params: Pesquisa) => console.log(this.total = params.total_pages) )
      )
      .subscribe((data: Pesquisa) => {
        this.movies = data.results;
      });
    });
  }

  pagination(item: string) {
    /*if (item === '+') {
      this.page += 1;
    } else if (item === '-') {
      this.page -= 1;
    } else {
      this.page += 1;
    }*/
    this.router.navigate(['/categories/' + this.id + '/' + this.page, {name: this.genre}]);
  }

}
