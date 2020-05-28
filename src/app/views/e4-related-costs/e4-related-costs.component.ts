import {Component, OnInit} from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-e4-related-costs',
  templateUrl: './e4-related-costs.component.html',
  styleUrls: ['./e4-related-costs.component.css']
})
export class E4RelatedCostsComponent implements OnInit {
  constructor() {
  }

  // costCategories: Array<String> = ['Primary Cost', 'Project Cost Indirect Chargeable'];
  public costCategories: Array<IOption> = [
    {label: 'Primary Cost', value: 'primary'},
    {label: 'Project Cost Indirect Chargeable', value: 'project'},
  ];
  public selectedCostCat: string;
  public mainCosts: Array<IOption> = [
    {label: 'Department Cost', value: 'dC'},
    {label: 'Outsource & Consultancy', value: 'oC'},
  ];
  public subCosts: Array<IOption> = [
    {label: 'Management Travels', value: 'mT'},
    {label: 'External Bench', value: 'eB'},
    {label: 'Tool', value: 'tool'},
    {label: 'Non-Chargeable Consultancy', value: 'ncC'},
    {label: 'Internal Project', value: 'iP'},
  ];
  ngOnInit(): void {
  }

}
