import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-project',
  templateUrl: './internal-project.component.html',
  styleUrls: ['./internal-project.component.css']
})
export class InternalProjectComponent implements OnInit {

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
    { Definition: string; ValidFrom: Date; Comments: string, Value: number},
    { Definition: string; ValidFrom: Date; Comments: string, Value: number},
    { Definition: string; ValidFrom: Date; Comments: string, Value: number}
  ];

  constructor() {
    this.data = [
      {
        Definition : 'Definition 1',
        ValidFrom : new Date('2018-06-07'),
        Value : 20000.0,
        Comments : 'Comment 1',
      },
      {
        Definition : 'Definition 2',
        ValidFrom : new Date('2019-06-07'),
        Value : 10000.0,
        Comments : 'Comment 2',
      },
      {
        Definition : 'Total',
        ValidFrom : null,
        Value : 30000.00,
        Comments : null,
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

  hideContent(): void {
    this.showAdd = false;
    this.showUpdate = false;
  }

}
