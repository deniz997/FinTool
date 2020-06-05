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
  data: [{ rate: string, number: number }];
  currency: string[];
  saved: boolean = true;
  rate: number;

  showAdd = false;
  showUpdate = false;

  constructor() {

    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Rate Table'
  ];


  public Rate: Array<IOption> = [
    {label: 'Regional', value: 'Item1'},
    {label: 'Domestic', value: 'Item2'},
    {label: 'Overseas', value: 'Item3'}
  ];


  ngOnInit(): void {
    this.currency = ['EUR', 'TL'];

  }

  onSave() {
    this.saved = true;
  }

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }

}
