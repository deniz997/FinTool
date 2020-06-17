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
  data: [{ pgktable: string; }, { pgktable: string; }];

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
        pgktable : 'Item 1 from Cost Center'
      },
      {
        pgktable : 'Item 2 from Cost Center'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'PGK Table'
  ];

  public PGKTable: Array<IOption> = [
    {label: 'Item 1 from Cost Center', value: 'Item1'},
    {label: 'Item 2 from Cost Center', value: 'Item2'}
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
