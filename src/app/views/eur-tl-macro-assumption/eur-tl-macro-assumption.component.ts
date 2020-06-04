import { Component, OnInit } from '@angular/core';
import {IOption} from "ng-select";

@Component({
  selector: 'app-eur-tl-macro-assumption',
  templateUrl: './eur-tl-macro-assumption.component.html',
  styleUrls: ['./eur-tl-macro-assumption.component.css']
})
export class EurTlMacroAssumptionComponent implements OnInit {


  selectedRow : Number = -1;
  setClickedRow : Function;
  data : [{ PlanningP: string; Rate: number; }, { PlanningP: string; Rate: number; }];

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  constructor() {
    this.data = [
      {
        PlanningP : 'EA1',
        Rate : 6.75
      },
      {
        PlanningP : 'EA2',
        Rate : 7.50
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  RightTableHeaders = [
    'Planning Period','Euro/TL Rate'
  ];

  public PlanningPeriods: Array<IOption> = [
    {label: 'EA1', value: 'Item1'},
    {label: 'EA2', value: 'Item2'},
  ];

  public ExchangeRate: Array<IOption> = [
    {label: 'Euro', value: 'EUR'},
    {label: 'TL', value: 'TL'},
  ];

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  ngOnInit(): void {
  }

  ShowHideAdd(): void{
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void{
    this.showUpdate = !this.showUpdate;
  }
}
