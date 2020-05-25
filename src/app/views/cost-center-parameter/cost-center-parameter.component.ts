import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-cost-center-parameter',
  templateUrl: './cost-center-parameter.component.html',
  styleUrls: ['./cost-center-parameter.component.css']
})
export class CostCenterParameterComponent implements OnInit {

  constructor() { }

  totalItems: number = 64;
  currentPage: number   = 4;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

  public costCenterTyp: Array<IOption> = [
    {label: 'Typ 1', value: 'Typ1'},
    {label: 'Typ 2', value: 'Typ2'},
  ];

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
