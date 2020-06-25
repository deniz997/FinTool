import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-external-bench',
  templateUrl: './external-bench.component.html',
  styleUrls: ['./external-bench.component.css']
})
export class ExternalBenchComponent implements OnInit {
  selectedRow: string;
  setClickedRow: Function;

  showAdd = false;
  showUpdate = false;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  public classes: Array<IOption> = [
    {label: 'Regional Rollout P', value: 'P'},
    {label: 'Regional Rollout A', value: 'A'},
    {label: 'Regional Rollout B', value: 'B'},
    {label: 'Regional Rollout C', value: 'C'},
  ];

  public TableHeader = [
    'FTE',
    'Class',
    'Total (€)'
  ];
  data: [
    { FTE: string; Class: string; Total: number},
    { FTE: string; Class: string; Total: number},
    {FTE: string; Class: string; Total: number}
    ];

  constructor() {
    this.data = [
      {
        FTE : '0,1',
        Class : 'A',
        Total : 1000.00,
      },
      {
        FTE : '0,1',
        Class : 'B',
        Total : 500,
      },
      {
        FTE : 'Total',
        Class : null,
        Total: 1500.00
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  ngOnInit(): void {
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

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }

  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }

  SetSelectedRow(): void {
    this.selectedRowNumber = null;
  }

}
