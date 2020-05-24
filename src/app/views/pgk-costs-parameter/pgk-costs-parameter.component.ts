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

  ngOnInit(): void {
  }

}
