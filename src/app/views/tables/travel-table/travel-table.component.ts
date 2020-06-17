import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-travel-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.css']
})
export class TravelTableComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ traveltable: string; }, { traveltable: string; }, { traveltable: string; }];

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 3;
  private selectedRowNumber: number;

  constructor() {
    this.data = [
      {
        traveltable : 'Regional'
      },
      {
        traveltable : 'Domestic'
      },
      {
        traveltable : 'Overseas'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Travel Table'
  ];


  public TravelTable: Array<IOption> = [
    {label: 'Regional', value: 'Item1'},
    {label: 'Domestic', value: 'Item2'},
    {label: 'Overseas', value: 'Item3'}
  ];


  validSelectedRowNumber: boolean = false;

  ngOnInit(): void {
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
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
