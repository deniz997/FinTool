import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-internal-headcount',
  templateUrl: './internal-headcount.component.html',
  styleUrls: ['./internal-headcount.component.css']
})
export class InternalHeadcountComponent implements OnInit {

  constructor() { }

  // costCategories: Array<String> = ['Primary Cost', 'Project Cost Indirect Chargeable'];
  public costCenters: Array<IOption> = [
    {label: 'Regional Rollout E4', value: 'E4'},
    {label: 'Regional Rollout E5', value: 'E5'},
    {label: 'Regional Rollout Memur', value: 'Memur'},
  ];

  ngOnInit(): void {
  }

}
