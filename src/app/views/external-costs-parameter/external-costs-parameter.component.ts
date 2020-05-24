import { Component, OnInit } from '@angular/core';
import {IOption} from "ng-select";

@Component({
  selector: 'app-external-costs-parameter',
  templateUrl: './external-costs-parameter.component.html',
  styleUrls: ['./external-costs-parameter.component.css']
})
export class ExternalCostsParameterComponent implements OnInit {

  constructor() { }

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
