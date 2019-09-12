import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { AccessibilityService } from './../../services/accessibility.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies: any;

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(
    private router$: Router) { }

  ngOnInit() { }

  open(movie: any) {
    this.router$.navigate(['/details/' + movie.id]);
  }

}
