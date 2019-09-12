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
  fontSize = 10;
  altoContrate = false;

  public elements = new Array(
    'body', 'h5', 'h3', 'h2', 'a', 'footer', 'div', 'nav', 'header'
  );

  current = 0;
  maxFont = 4;
  minFont = -4;

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
    this.elements.forEach(e => {
      this.elementsContraste(e);
    });

    const elements2 = document.getElementsByTagName('button');
    for (let i = 0; i < elements2.length; i++) {
      const element = document.getElementsByTagName('button')[i];
      element.style.background = 'black';
      element.style.color = 'yellow';
    }
  }

  elementsContraste(tag) {
    const elements1 = document.getElementsByTagName(tag);
    for (let i = 0; i < elements1.length; i++) {
      const element = document.getElementsByTagName(tag)[i];
      element.style.background = 'black';
      element.style.color = 'white';
    }
  }

  increaseFont() {
    if (this.current < this.maxFont) {
      this.elements.forEach(e => {
        this.changeFontSize(e, 'INC');
      });
      this.current++;
    }
  }

  decreaseFont() {
    if (this.minFont < this.current) {
      this.elements.forEach(e => {
        this.changeFontSize(e, 'DEC');
      });
      this.current--;
    }
  }

  recoveryFont2() {
    while (this.current !== 0) {
      if (this.current < 0) {
        this.increaseFont();
      } else {
        this.decreaseFont();
      }
    }
  }



  recoveryFont() {
    this.elements.forEach(e => {
      this.recoveryFontAux(e);
    });
  }
  recoveryFontAux(tag) {
    const elements = document.getElementsByTagName(tag);

    for (let i = 0; i < elements.length; i++) {
      const element = document.getElementsByTagName(tag)[i];
      const fontString = window.getComputedStyle(element, null).getPropertyValue('font-size');
      const fontNumber = parseFloat(fontString);

      element.style.fontSize = fontNumber + 'px';
    }
  }

  changeFontSize(tag, order) {
    const elements = document.getElementsByTagName(tag);

    for (let i = 0; i < elements.length; i++) {
      const element = document.getElementsByTagName(tag)[i];
      const fontString = window.getComputedStyle(element, null).getPropertyValue('font-size');
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
