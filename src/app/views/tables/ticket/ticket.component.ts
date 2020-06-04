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


  ngOnInit(): void {
  }

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }

}
