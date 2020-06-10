import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ planning: string; }, { planning: string; }];

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
        planning : 'EA1'
      },
      {
        planning : 'EA2'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Planning'
  ];

  public Planning: Array<IOption> = [
    {label: 'EA1', value: 'Item1'},
    {label: 'EA2', value: 'Item2'}
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
