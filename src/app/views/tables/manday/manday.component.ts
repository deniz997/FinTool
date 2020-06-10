import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-manday',
  templateUrl: './manday.component.html',
  styleUrls: ['./manday.component.css']
})
export class MandayComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ manday: string; }, { manday: string; }];

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
        manday : 'Special'
      },
      {
        manday : 'Standard'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Manday Typ'
  ];

  public Manday: Array<IOption> = [
    {label: 'Special', value: 'Item1'},
    {label: 'Standard', value: 'Item2'}
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
