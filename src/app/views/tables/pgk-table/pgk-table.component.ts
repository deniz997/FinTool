import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-pgk-table',
  templateUrl: './pgk-table.component.html',
  styleUrls: ['./pgk-table.component.css']
})
export class PgkTableComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ pgktable: string; }, { pgktable: string; }];

  showAdd = false;
  showUpdate = false;

  constructor() {
    this.data = [
      {
        pgktable : 'Item 1 from Cost Center'
      },
      {
        pgktable : 'Item 2 from Cost Center'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'PGK Table'
  ];

  public PGKTable: Array<IOption> = [
    {label: 'Item 1 from Cost Center', value: 'Item1'},
    {label: 'Item 2 from Cost Center', value: 'Item2'}
  ];

  public ExchangeRate: Array<IOption> = [
    {label: 'Euro', value: 'EUR'},
    {label: 'TL', value: 'TL'},
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
