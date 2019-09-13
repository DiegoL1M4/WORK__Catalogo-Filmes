import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

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
  page: number;
  totalPages: number;
  load = false;

  constructor(
    private router$: Router,
    private moviedbService$: MoviedbService,
    private route$: ActivatedRoute) {

    this.route$.params
      .subscribe((res) => {
        this.id = res.id;
        this.page = parseInt(res.page, 10); });
    this.route$.paramMap
      .subscribe((params: ParamMap) => {
        this.genre = params.get('name'); });
  }

  ngOnInit() {

    this.route$.url.subscribe(url => {
      this.moviedbService$.moviesGenre(this.id, this.page.toString())
      .subscribe((data: Pesquisa) => {
        this.movies = data.results;
        this.load = true;

        this.totalPages = data.total_pages;
      });
    });

  }

  pagination(page: any) {
    this.page = page;
    this.router$.navigate(['/categories/' + this.id + '/' + this.page, {name: this.genre}]);
  }

}
