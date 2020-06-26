import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  selectedRow: string;
  setClickedRow: Function;

  showAdd = false;
  showUpdate = false;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  public TableHeader = [
    'Definition',
    'Valid from',
    'Comments',
    'Value (€)',
  ];
  data: [
    { Definition: string; ValidFrom: Date; Comments: string; Value: number},
    { Definition: string; ValidFrom: Date; Comments: string; Value: number},
    { Definition: string; ValidFrom: Date; Comments: string; Value: number}
  ];

  constructor() {
    this.data = [
      {
        Definition : 'Financial Planning Software',
        ValidFrom : new Date('2020-01-01'),
        Value : 1500.00,
        Comments : null,
      },
      {
        Definition : 'Tool X Licence',
        ValidFrom : new Date('2020-02-01'),
        Value : 1000.00,
        Comments : null,
      },
      {
        Definition : 'Total',
        ValidFrom : null,
        Value : 2500.00,
        Comments : null,
      },
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

  hideContent(): void {
    this.showAdd = false;
    this.showUpdate = false;
  }

}
