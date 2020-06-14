import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-fix-costs',
  templateUrl: './fix-costs.component.html',
  styleUrls: ['./fix-costs.component.css']
})
export class FixCostsComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ currency: string; }, { currency: string; }, { currency: string; }];

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
        currency : 'Monitoring'
      },
      {
        currency : 'Licence'
      },
      {
        currency : 'Fix E5 Costs'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Fix Costs'
  ];

  public Currency: Array<IOption> = [
    {label: 'Monitoring', value: 'Item1'},
    {label: 'Licence', value: 'Item2'},
    {label: 'Fix E5 Cost', value: 'Item2'}
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
