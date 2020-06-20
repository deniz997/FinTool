import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-pgk-table',
  templateUrl: './pgk-table.component.html',
  styleUrls: ['./pgk-table.component.css']
})
export class PgkTableComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ pgktable: string; }, { pgktable: string; }, { pgktable: string; }];

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
        pgktable : '0000036140 - Regional Rollout'
      },
      {
        pgktable : 'SDC'
      },
      {
        pgktable : 'SDC w/o Expat'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'PGK Cost Definition'
  ];

  public PGKTable: Array<IOption> = [
    {label: '0000036140 - Regional Rollout', value: 'Item1'},
    {label: 'SDC', value: 'Item2'},
    {label: 'SDC w/o Expat', value: 'Item2'}
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
