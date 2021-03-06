import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.css']
})
export class CostCenterComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ costcenter: string; }, { costcenter: string; }, { costcenter: string; }];

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
        costcenter : 'Cost Center Typ 1'
      },
      {
        costcenter : 'Cost Center Typ 2'
      },
      {
        costcenter : 'Cost Center Typ 3'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Cost Center Typ'
  ];

  public CostCenter: Array<IOption> = [
    {label: 'Cost Center 1', value: 'Item1'},
    {label: 'Cost Center 2', value: 'Item2'},
    {label: 'Cost Center 3', value: 'Item3'},
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
