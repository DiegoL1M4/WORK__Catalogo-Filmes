import { Component, OnInit, ViewChild, ElementRef, ɵɵresolveBody } from '@angular/core';
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
  fontSize = 10;
  altoContrate = false;

  public elements = new Array(
    'body', 'h5', 'h3', 'h2', 'a', 'footer'
  );

  @ViewChild('estilo', { static: false }) ajuste: ElementRef;

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

  contraste() {
    this.altoContrate ? this.altoContrate = false : this.altoContrate = true;

    (this.ajuste.nativeElement as HTMLParagraphElement).style.backgroundColor = 'black';
  }

  fonteAlt(operator: string) {
    operator === '+' ? this.fontSize++ : this.fontSize--;
    (this.ajuste.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
  }



  increaseFont() {
    this.elements.forEach(e => {
      this.changeFontSize(e, 'INC');
    });
  }

  decreaseFont() {
    this.elements.forEach(e => {
      this.changeFontSize(e, 'DEC');
    });
  }

  changeFontSize(tag, order) {
    let elements = document.getElementsByTagName(tag);

    for (let i = 0; i < elements.length; i++) {
      let element = document.getElementsByTagName(tag)[i];
      let fontString = window.getComputedStyle(element, null).getPropertyValue('font-size');
      let fontNumber = parseFloat(fontString);

      if (order === 'INC') {
        fontNumber++;
      } else {
        fontNumber--;
      }

      element.style.fontSize = fontNumber.toString() + 'px';
    }
  }




}
