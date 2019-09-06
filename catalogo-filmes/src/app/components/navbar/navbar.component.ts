import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  genres: any;

  constructor(private router: Router, private moviedbService: MoviedbService) { }

  ngOnInit() {
    this.moviedbService.genres()
    .subscribe(({genres}: any) => {
      this.genres = genres;
    });
  }

  pesquisar(query: string) {
    this.router.navigate(['/search/' + query], {});
  }

  reset() {
    this.router.navigate(['/'], {});
  }

  categore(genre: any) {
    this.router.navigate(['/categories/' + genre.id], {});
  }

}
