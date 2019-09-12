import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

  constructor() { }

  contraste = false;
  fontCurrent = 0;

  maxFont = 4;
  minFont = -4;

  public elements = new Array(
    'body', 'h5', 'h3', 'h2', 'a', 'footer', 'div', 'nav', 'header'
  );

  fontClass = Array('f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8');
  fonte = 4; // 0123 4 5678

  increaseFont() {
    if (this.fontCurrent < this.maxFont) {
      this.elements.forEach(e => {
        this.changeFontSize(e, 'INC');
      });
      this.fontCurrent++;
    }
  }

  decreaseFont() {
    if (this.minFont < this.fontCurrent) {
      this.elements.forEach(e => {
        this.changeFontSize(e, 'DEC');
      });
      this.fontCurrent--;
    }
  }

  recoveryFont(valor: number) {
    while (this.fontCurrent !== valor) {
      if (this.fontCurrent < valor) {
        this.increaseFont();
      } else {
        this.decreaseFont();
      }
    }
  }

  ajusteFont() {
    while (0 !== this.fontCurrent) {
      if (0 < this.fontCurrent) {
        this.increaseFont();
        this.fontCurrent--;
      } else {
        this.decreaseFont();
        this.fontCurrent++;
      }
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


  applyContraste() {
    if (this.contraste) {
      document.body.classList.add('contrast');
    } else {
      document.body.classList.remove('contrast');
    }
  }

  changeContraste() {
    this.contraste = !this.contraste;
    this.applyContraste();
  }





  changeFont(op: string) {
    document.body.classList.remove(this.fontClass[this.fonte]);

    if (op === '+' && this.fonte < 8) {
      this.fonte = this.fonte + 1;
    } else if (op === '-' && 0 < this.fonte) {
      this.fonte = this.fonte - 1;
    } else if (op === 'A') {
      this.fonte = 4;
    }

    document.body.classList.add(this.fontClass[this.fonte]);
  }

}
