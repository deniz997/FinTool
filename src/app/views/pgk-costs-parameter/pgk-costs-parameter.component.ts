import { Component, OnInit } from '@angular/core';
import {identifierModuleUrl} from "@angular/compiler";
import {IOption} from 'ng-select';

@Component({
  selector: 'app-pgk-costs-parameter',
  templateUrl: './pgk-costs-parameter.component.html',
  styleUrls: ['./pgk-costs-parameter.component.css']
})
export class PgkCostsParameterComponent implements OnInit {



  selectedRow : Number;
  setClickedRow : Function;
  data : [{ Status: string; PGK: string; Currency: string; Value: number; PlannungP: string }, { Status: string; PGK: string; Currency: string; Value: number; PlannungP: string }, { Status: string; PGK: string; Currency: string; Value: number; PlannungP: string }];

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  constructor() {
    this.data = [
      {
        PGK : '0000036140 - Regional Rollout',
        Status : 'Memur',
        PlannungP : 'EA1',
        Currency : 'TL',
        Value : 50
       },
      {
        PGK : 'SDC',
        Status : 'E5',
        PlannungP : 'EA2',
        Currency : 'EUR',
        Value : 20
      },
      {
        PGK : 'SDC w/o Expat',
        Status : 'E4',
        PlannungP : 'EA2',
        Currency : 'EUR',
        Value : 30
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  TableHeaders = [
    'PGK Cost Definition per Person',
    'Status',
    'Planning Period',
    'Currency',
    'Value',
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

  ShowHideAdd(): void{
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void{
    this.showUpdate = !this.showUpdate;
  }

}
