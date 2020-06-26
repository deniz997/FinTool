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
        Definition : 'Project ABC',
        ValidFrom : new Date('2020-01-01'),
        Value : 2000.0,
        Comments : 'Consultancy company abc',
      },
      {
        Definition : 'Project XYZ',
        ValidFrom : new Date('2020-02-01'),
        Value : 2000.0,
        Comments : null,
      },
      {
        Definition : 'Total',
        ValidFrom : null,
        Value : 4000.00,
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
