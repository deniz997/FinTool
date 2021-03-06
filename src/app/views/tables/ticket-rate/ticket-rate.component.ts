import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-ticket-rate',
  templateUrl: './ticket-rate.component.html',
  styleUrls: ['./ticket-rate.component.css']
})
export class TicketRateComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ currency: string; year: number; rate: string}];
  currency: string[];
  saved: boolean = true;
  rate: number;

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
        currency: 'Silver',
        year: 2020,
        rate : 'EUR'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Currency',
    'Ticket Typ',
    'Year'
  ];

  public Typ: Array<IOption> = [
    {label: 'Silver', value: 'Item1'},
    {label: 'Gold', value: 'Item2'},
    {label: 'Platinium', value: 'Item1'}
  ];


  public Rate: Array<IOption> = [
    {label: 'EUR', value: 'Item1'},
    {label: 'TL', value: 'Item2'}
  ];

  public year: Array<IOption> = [
    {label: '2020', value: 'Year1'},
    {label: '2019', value: 'Year2'},
    {label: '2018', value: 'Year3'},
    {label: '2017', value: 'Year4'},
    {label: '2016', value: 'Year5'},
    {label: '2015', value: 'Year6'},
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
