import { Component, OnInit } from '@angular/core';
import {IOption} from "ng-select";

@Component({
  selector: 'app-external-costs-parameter',
  templateUrl: './external-costs-parameter.component.html',
  styleUrls: ['./external-costs-parameter.component.css']
})
export class ExternalCostsParameterComponent implements OnInit {

  constructor() { }

  totalItems: number = 64;
  currentPage: number   = 1;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 1;

  public ExternalCostDefinitionList: Array<IOption> = [
    {label: 'Definition 1', value: 'D1'},
    {label: 'Definition 2', value: 'D2'}
  ];

  public CurrentLevel: Array<IOption> = [
    {label: 'CL 1 from User Table', value: 'CL1'},
    {label: 'CL 2 from User Table', value: 'CL2'}
  ];

  public PlanningPeriods: Array<IOption> = [
    {label: 'EA1', value: 'EA1'},
    {label: 'EA2', value: 'EA2'},
  ];

  public CurrencyList: Array<IOption> = [
    {label: 'EUR', value: 'Euro'},
    {label: 'TL', value: 'TL'},
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
