import { Component, OnInit } from '@angular/core';
import {identifierModuleUrl} from "@angular/compiler";
import {IOption} from 'ng-select';

@Component({
  selector: 'app-pgk-costs-parameter',
  templateUrl: './pgk-costs-parameter.component.html',
  styleUrls: ['./pgk-costs-parameter.component.css']
})
export class PgkCostsParameterComponent implements OnInit {

  constructor() { }


  show = false;

  totalItems: number = 64;
  currentPage: number   = 1;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 1;

  public PGKCostDefinitionList: Array<IOption> = [
    {label: 'Item 1 from Cost Center', value: 'Item1'},
    {label: 'Item 2 from Cost Center', value: 'Item2'},
  ];

  public StatusList: Array<IOption> = [
    {label: 'Status 1', value: 'Item1'},
    {label: 'Status 2', value: 'Item2'},
  ];

  public PlanningPeriods: Array<IOption> = [
    {label: 'EA1', value: 'Item1'},
    {label: 'EA2', value: 'Item2'},
  ];

  public CurrencyList: Array<IOption> = [
    {label: 'EUR', value: 'Item1'},
    {label: 'TL', value: 'Item2'},
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

  ShowHide(): void{
    this.show = !this.show;
  }

}
