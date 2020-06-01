import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {ngbAutoClose} from '@ng-bootstrap/ng-bootstrap/util/autoclose';

@Component({
  selector: 'app-cost-center-parameter',
  templateUrl: './cost-center-parameter.component.html',
  styleUrls: ['./cost-center-parameter.component.css']
})
export class CostCenterParameterComponent implements OnInit {

  constructor() {
    this.setClickedRow = function(index) {
      this.selectedRow = index;
    };
  }

  rightTableFirstCellHeader = 'Cost Center ID';

  rightTableHeaders = [
    'Cost Center Name',
    'Cost Center Typ',
  ];

  rightTableData = [
    ['Cost Center ID 1', 'Cost Center Name 1', 'Typ 1'],
    ['Cost Center ID 2', 'Cost Center Name 2', 'Typ 1'],
    ['Cost Center ID 3', 'Cost Center Name 3', 'Typ 2'],
  ];

  showAdd = false;
  showUpdate = false;

  totalItems: number = 60;
  currentPage: number   = 1;
  itemPerPage: number = 5;
  maxSize: number = 7;

  public costCenterTyp: Array<IOption> = [
    {label: 'Typ 1', value: 'Typ1'},
    {label: 'Typ 2', value: 'Typ2'},
  ];

  selectedRow = [];
  setClickedRow: Function;

  currentCostCenter: any;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  showAddCard() {
    this.showAdd = !this.showAdd;
  }

  closeAddCard() {
    this.showAdd = false;
  }

  showUpdateCard() {
    this.showUpdate = !this.showUpdate;
  }

  closeUpdateCard() {
    this.showUpdate = false;
  }

  saveAdd() {
    this.closeAddCard();
  }

  saveUpdate() {
    this.closeUpdateCard();
  }

  ngOnInit(): void {
    this.selectedRow.push('');
    this.rightTableHeaders.forEach(_ => {
      this.selectedRow.push('');
    });
  }
}
