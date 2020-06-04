import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-travel-day-typ',
  templateUrl: './travel-day-typ.component.html',
  styleUrls: ['./travel-day-typ.component.css']
})
export class TravelDayTypComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ traveltable: string; }, { traveltable: string; }, { traveltable: string; }];

  showAdd = false;
  showUpdate = false;

  constructor() {
    this.data = [
      {
        traveltable : 'Regional'
      },
      {
        traveltable : 'Domestic'
      },
      {
        traveltable : 'Overseas'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Travel Day Typ'
  ];


  public TravelTable: Array<IOption> = [
    {label: 'Regional', value: 'Item1'},
    {label: 'Domestic', value: 'Item2'},
    {label: 'Overseas', value: 'Item3'}
  ];


  ngOnInit(): void {
  }

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }
}
