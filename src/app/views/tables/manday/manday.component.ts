import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-manday',
  templateUrl: './manday.component.html',
  styleUrls: ['./manday.component.css']
})
export class MandayComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ manday: string; }, { manday: string; }];

  showAdd = false;
  showUpdate = false;

  constructor() {
    this.data = [
      {
        manday : 'Special'
      },
      {
        manday : 'Standard'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Manday Typ'
  ];

  public Manday: Array<IOption> = [
    {label: 'Special', value: 'Item1'},
    {label: 'Standard', value: 'Item2'}
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
