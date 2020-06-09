import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-rate-table',
  templateUrl: './rate-table.component.html',
  styleUrls: ['./rate-table.component.css']
})
export class RateTableComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ rate: string; number: number }];
  currency: string[];
  saved: boolean = true;
  rate: number;

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 3;

  constructor() {
    this.data = [
      {
        rate : 'EUR',
        number: 1500
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Rate Table'
  ];


  public Rate: Array<IOption> = [
    {label: 'EUR', value: 'Item1'},
    {label: 'TL', value: 'Item2'}
  ];


  ngOnInit(): void {
    this.currency = ['EUR', 'TL'];

  }


  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }

  showAddCard() {
    this.showAdd = !this.showAdd;
  }

  closeAddCard() {
    this.showAdd = false;
  }

  showUpdateCard() {
    this.showUpdate = !this.showUpdate;
  }

  closeUpdateCard() {
    this.showUpdate = false;
  }

  saveAdd() {
    this.closeAddCard();
  }

  saveUpdate() {
    this.closeUpdateCard();
  }
}
