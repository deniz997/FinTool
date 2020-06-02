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

  TableHeaders = [
    'PGK Cost Definition per Person',
    'Status',
    'Planning Period',
    'Currency',
    'Value',
  ]

  TableData = [
    ['0000036140 - Regional Rollout','Memur','EA1','TL','50'],
    ['SDC','E5','EA2','EUR','20'],
    ['SDC w/o Expat','E4','EA2','EUR','30'],
  ]

  public PGKCostDefinitionList: Array<IOption> = [
    {label: '0000036140 - Regional Rollout', value: 'Item1'},
    {label: 'SDC', value: 'Item2'},
    {label: 'SDC w/o Expat', value: 'Item3'},
  ];

  public StatusList: Array<IOption> = [
    {label: 'E3', value: 'E3'},
    {label: 'E4', value: 'E4'},
    {label: 'E5', value: 'E5'},
    {label: 'Memur', value: 'Memur'},

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
