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
        Definition : 'Definition 1',
        ValidFrom : new Date('2019-06-07'),
        Value : 16000,
        Comments : 'Comment 1',
      },
      {
        Definition : 'Definition 2',
        ValidFrom : new Date('2019-06-07'),
        Value : 16000,
        Comments : 'Comment 2',
      },
      {
        Definition : 'Total',
        ValidFrom : null,
        Value : 32000,
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
