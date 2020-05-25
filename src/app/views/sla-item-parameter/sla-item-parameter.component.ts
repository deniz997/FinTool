import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-sla-item-parameter',
  templateUrl: './sla-item-parameter.component.html',
  styleUrls: ['./sla-item-parameter.component.css']
})
export class SlaItemParameterComponent implements OnInit {

  constructor() { }

  totalItems: number = 64;
  currentPage: number   = 1;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  ngOnInit(): void {
  }

}
