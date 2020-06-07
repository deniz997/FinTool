import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-external-costs-parameter',
  templateUrl: './external-costs-parameter.component.html',
  styleUrls: ['./external-costs-parameter.component.css']
})
export class ExternalCostsParameterComponent implements OnInit {

  selectedRow: string;
  setClickedRow: Function;

  data: [{ CurrentL: string; ExternalC: string; Currency: string; Value: number; PlanningP: string }, { CurrentL: string; ExternalC: string; Currency: string; Value: number; PlanningP: string }, { CurrentL: string; ExternalC: string; Currency: string; Value: number; PlanningP: string }];

  showAdd = false;
  showUpdate = false;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  constructor() {
    this.data = [
      {
        ExternalC : 'Definition 2',
        CurrentL : 'Regional Rollout P',
        PlanningP : 'EA1',
        Currency : 'TL',
        Value : 50
      },
      {
        ExternalC : 'Definition 3',
        CurrentL : 'Regional Rollout A',
        PlanningP : 'EA2',
        Currency : 'EUR',
        Value : 20
      },
      {
        ExternalC : 'Definition 1',
        CurrentL : 'Regional Rollout B',
        PlanningP : 'EA2',
        Currency : 'EUR',
        Value : 30
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  TableHeader = [
    'External Cost Definition per Person',
    'Current Level',
    'Planning Period',
    'Currency',
    'Value',
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

  ngOnInit(): void {
  }

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.data.length || this.selectedRowNumber < 0);
  }
  SetSelectedRow(): void{
    this.selectedRowNumber = null
  }
}
