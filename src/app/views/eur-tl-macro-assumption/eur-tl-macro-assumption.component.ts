import { Component, OnInit } from '@angular/core';
import {IOption} from "ng-select";

@Component({
  selector: 'app-eur-tl-macro-assumption',
  templateUrl: './eur-tl-macro-assumption.component.html',
  styleUrls: ['./eur-tl-macro-assumption.component.css']
})
export class EurTlMacroAssumptionComponent implements OnInit {

  constructor() { }

  show = false;

  totalItems: number = 64;
  currentPage: number   = 1;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

  RightTableHeaders = [
    'Planning Period','Euro/TL Rate'
  ];

  RightTableData = [
    ['EA1', '6,75'],
    ['EA2', '7,50'],
  ]

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

  ShowHide(): void{
    this.show = !this.show;
  }

}
