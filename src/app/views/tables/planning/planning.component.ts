import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ planning: string; }, { planning: string; }];

  showAdd = false;
  showUpdate = false;

  constructor() {
    this.data = [
      {
        planning : 'EA1'
      },
      {
        planning : 'EA2'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'Planning'
  ];

  public Planning: Array<IOption> = [
    {label: 'EA1', value: 'Item1'},
    {label: 'EA2', value: 'Item2'}
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
