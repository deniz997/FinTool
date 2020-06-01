import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {ngbAutoClose} from '@ng-bootstrap/ng-bootstrap/util/autoclose';

@Component({
  selector: 'app-cost-center-parameter',
  templateUrl: './cost-center-parameter.component.html',
  styleUrls: ['./cost-center-parameter.component.css']
})
export class CostCenterParameterComponent implements OnInit {

  constructor() {}

  rightTableFirstCellHeader = 'Cost Center ID';

  rightTableHeaders = [
    'Cost Center Name',
    'Cost Center Typ',
  ];

  rightTableData = [
    ['Cost Center ID 1', 'Cost Center Name 1', 'Cost Center Typ 1'],
    ['Cost Center ID 2', 'Cost Center Name 2', 'Cost Center Typ 1'],
    ['Cost Center ID 3', 'Cost Center Name 3', 'Cost Center Typ 2'],
  ];

  show = false;

  totalItems: number = 60;
  currentPage: number   = 1;
  itemPerPage: number = 5;
  maxSize: number = 7;

  public costCenterTyp: Array<IOption> = [
    {label: 'Typ 1', value: 'Typ1'},
    {label: 'Typ 2', value: 'Typ2'},
  ];

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  ShowHide(): void {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

  closeAddCard() {
    this.show = false;
  }

  save() {
    this.closeAddCard();
  }

}
