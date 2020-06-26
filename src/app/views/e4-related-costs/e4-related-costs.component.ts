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
  public mainCosts: Array<IOption>;
  public mainCostSelectDisabled: boolean;
  public subCosts: Array<IOption>;
  public selectedMainCostItem: string;
  public subCostSelectDisabled: boolean;
  public selectedSubCost: string;
  public mainCostTotal: string;

  public selectedMainCost(value: IOption): void {
    this.selectedMainCostItem = value.label;
    if (value.value === 'dC') {
      this.subCosts = [{label: 'Management Travels', value: 'mT'}];
      this.mainCostTotal = '1,100';
    } else if (value.value === 'oC') {
      this.subCosts = [
        {label: 'External Bench', value: 'eB'},
        {label: 'Tool', value: 'tool'},
        {label: 'Non-Chargeable Consultancy', value: 'ncC'},
        {label: 'Internal Project', value: 'iP'}];
      this.mainCostTotal = '11,000';
    }
    this.subCostSelectDisabled = false;
  }

  public selectedCostCategory(value: IOption): void {
    this.selectedCostCat = value.label;
    if (value.value === 'primary') {
      this.mainCosts = [{label: 'Department Cost', value: 'dC'}];
    } else if (value.value === 'project') {
      this.mainCosts = [{label: 'Outsource & Consultancy', value: 'oC'}];
    }
    if (this.selectedSubCost != null) {
      this.subCostSelectDisabled = true;
      this.selectedSubCost = null;
    }
    this.mainCostSelectDisabled = false;
    this.selectedMainCostItem = null;
  }

  public selectedSubCostCat(value: IOption): void {
    this.selectedSubCost = value.value;
  }
  ngOnInit(): void {
    this.mainCostSelectDisabled = true;
    this.subCostSelectDisabled = true;
  }

}
