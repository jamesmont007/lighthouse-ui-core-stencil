import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-paginator',
  templateUrl: './core-paginator.component.html',
  styleUrls: ['./core-paginator.component.scss']
})
export class CorePaginatorComponent implements OnInit {
  havePageSizeChunk = false;
  page = 1;
  pageSize = 20;
  totalItems = 80;

  changePageHandlerResult: number;
  changePageSizeHandlerResult: number;

  constructor() { }

  ngOnInit() {
  }

  changePageHandler(detail) {
    this.changePageHandlerResult = detail;
  }

  changePageSizeHandler(detail) {
    this.changePageSizeHandlerResult = detail;
  }

}
