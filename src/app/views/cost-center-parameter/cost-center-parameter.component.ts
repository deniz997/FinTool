import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-cost-center-parameter',
  templateUrl: './cost-center-parameter.component.html',
  styleUrls: ['./cost-center-parameter.component.css']
})
export class CostCenterParameterComponent implements OnInit {

  constructor() { }

  public costCenterTyp: Array<IOption> = [
    {label: 'Typ 1', value: 'Typ1'},
    {label: 'Typ 2', value: 'Typ2'},
  ];

  ngOnInit(): void {
  }

}
