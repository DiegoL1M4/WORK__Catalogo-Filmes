import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviedbService } from 'src/app/services/moviedb.service';
import { Genres } from './../../interfaces/genres';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  genres: any;
  fonte: number;

  constructor(
    private router$: Router,
    private moviedbService$: MoviedbService) { }

  ngOnInit() {
    this.moviedbService$.genres()
    .subscribe((data: Genres) => {
      this.genres = data.genres;
    });
  }

  pesquisar(query: string) {
    this.router$.navigate(['/search/' + query], {});
  }

  categore(genre: any) {
    this.router$.navigate(['/categories/' + genre.id + '/1', {name: genre.name}]);
  }

  fonteAlt(op: string) {
    /*this.fonte = parseInt( $('*').css('font-size'), 10);
    if (op === '+') {
      $('*').css('fontSize', this.fonte + 1);
    } else if (op === '-') {
      $('*').css('fontSize', this.fonte - 1);
    } else {
      $('*').css('fontSize', 16);
    }*/
  }

}
