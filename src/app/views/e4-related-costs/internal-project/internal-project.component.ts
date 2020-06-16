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
    'Value (€)',
    'Comments',
    'Total (€)'
  ];
  data: [
    { Definition: string; ValidFrom: Date; Value: number, Comments: string, Total: number},
    { Definition: string; ValidFrom: Date; Value: number, Comments: string, Total: number}
  ];

  constructor() {
    this.data = [
      {
        Definition : 'Definition 1',
        ValidFrom : new Date('2018-06-07'),
        Value : 0.0,
        Comments : 'Comment 1',
        Total : 10000.00
      },
      {
        Definition : 'Definition 2',
        ValidFrom : new Date('2019-06-07'),
        Value : 0.0,
        Comments : 'Comment 2',
        Total : 20000.00
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
    this.showAdd = true;
    this.showUpdate = false;
  }

  ShowHideUpdate(): void {
    this.showAdd = false;
    this.showUpdate = true;
  }

  SetSelectedRow(): void {
    this.selectedRowNumber = null;
  }

  hideContent(): void {
    this.showAdd = false;
    this.showUpdate = false;
  }

}
