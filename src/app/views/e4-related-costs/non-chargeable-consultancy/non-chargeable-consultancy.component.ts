import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-chargeable-consaltancy',
  templateUrl: './non-chargeable-consultancy.component.html',
  styleUrls: ['./non-chargeable-consultancy.component.css']
})
export class NonChargeableConsultancyComponent implements OnInit {
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
        Definition : 'Abc xyz',
        ValidFrom : new Date('2020-01-01'),
        Value : 3000.0,
        Comments : 'Support from company xyz',
      },
      {
        Definition : 'Definition 2',
        ValidFrom : new Date('2019-06-07'),
        Value : 0.0,
        Comments : null,
      },
      {
        Definition : 'Total',
        ValidFrom : null,
        Value : 3000.0,
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
