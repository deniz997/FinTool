import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ status: string; }, { status: string; }, { status: string; }];

  showAdd = false;
  showUpdate = false;

  constructor() {
    this.data = [
      {
        status : 'Status 1'
      },
      {
        status : 'Status 2'
      },
      {
        status : 'Status 3'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Status'
  ];

  public Status: Array<IOption> = [
    {label: 'Status 1', value: 'Item1'},
    {label: 'Status 2', value: 'Item2'},
    {label: 'Status 3', value: 'Item3'}
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
