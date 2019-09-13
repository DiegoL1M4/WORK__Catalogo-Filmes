import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() movies: any;

  carouselActive = 'carousel-item active';
  carouselNormal = 'carousel-item';

  urlImage = 'https://image.tmdb.org/t/p/original';

  constructor(
    private router$: Router) { }

  ngOnInit() {
  }

  open(movie: any) {
    this.router$.navigate(['/details/' + movie.id]);
  }

}
