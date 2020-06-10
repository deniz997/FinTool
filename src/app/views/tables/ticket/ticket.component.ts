import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ ticket: string; }, { ticket: string; }, { ticket: string; }];

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
        ticket : 'Silver'
      },
      {
        ticket : 'Gold'
      },
      {
        ticket : 'Platinium'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Ticket'
  ];

  public Ticket: Array<IOption> = [
    {label: 'Silver', value: 'Item1'},
    {label: 'Gold', value: 'Item2'},
    {label: 'Platinium', value: 'Item3'}
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
