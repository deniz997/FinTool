import { Component, OnInit } from '@angular/core';
import {IOption} from "ng-select";

@Component({
  selector: 'app-external-costs-parameter',
  templateUrl: './external-costs-parameter.component.html',
  styleUrls: ['./external-costs-parameter.component.css']
})
export class ExternalCostsParameterComponent implements OnInit {

  constructor() { }

  show = false;

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  TableHeader = [
    'External Cost Definition per Person',
    'Current Level',
    'Planning Period',
    'Currency',
    'Value',
  ];

  TableData = [
    ['Definition 2', 'Regional Rollout P', 'EA1', 'EUR', '30'],
    ['Definition 3', 'Regional Rollout A', 'EA2', 'TL', '420'],
    ['Definition 1', 'Regional Rollout B', 'EA2', 'EUR', '20'],
    ['Definition 4', 'Regional Rollout C', 'EA1', 'EUR', '35'],
  ];

  public ExternalCostDefinitionList: Array<IOption> = [
    {label: 'Definition 1', value: 'D1'},
    {label: 'Definition 2', value: 'D2'},
    {label: 'Definition 3', value: 'D2'}
  ];

  public CurrentLevel: Array<IOption> = [
    {label: 'Regional Rollout P', value: 'P'},
    {label: 'Regional Rollout A', value: 'A'},
    {label: 'Regional Rollout B', value: 'B'},
    {label: 'Regional Rollout C', value: 'C'},
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

  ShowHide(): void{
    this.show = !this.show;
  }

}
