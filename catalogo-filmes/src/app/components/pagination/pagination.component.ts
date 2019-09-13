import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() totalPages: number;

  @Output() evento = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChange(op: any) {
    if (op === '+' && this.page < this.totalPages) {
      this.page += 1;
    } else if (op === '-' && this.page !== 1) {
      this.page -= 1;
    } else if (op !== '+' && op !== '-') {
      this.page = op;
    }
    this.evento.emit(this.page);
  }

}
