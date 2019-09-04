import { Component, OnInit } from '@angular/core';

import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  genres: any;

  constructor(private moviedbService: MoviedbService) { }

  ngOnInit() {
    this.moviedbService.genres()
    .subscribe(({genres}: any) => {
      this.genres = genres;
    });
  }

}
