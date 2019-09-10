import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;

  @Output() evento = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChange(op: string) {
    this.evento.emit(op);
  }

}
