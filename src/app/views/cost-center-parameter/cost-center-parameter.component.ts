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
  }

  currentCostCenter: any;

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

  showPicker: boolean;
  clickedRow = [];

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
    this.clickedRow.push('');
    this.rightTableHeaders.forEach(_ => {
      this.clickedRow.push('');
    });
  }

  saveClickedRow(i: number) {
    this.emptyClickedRow();
    this.rightTableData[i].forEach(value => {
      this.clickedRow.push(value);
    });
  }

  onTableRowClick(i: number) {
    this.currentCostCenter = this.rightTableData[i][0];
    this.saveClickedRow(i);
    this.showUpdateCard();
  }

  emptyClickedRow() {
    this.clickedRow = [];
  }

  getPlaceHolderForUpdateFields(i: number): string {
    if (this.currentCostCenter === this.getNextCostCenterID() && i === 0) {
      return 'Cost Center ID 1';
    } else {
      return 'Typ 1';
    }
  }

  getNextCostCenterID(): string {
    return 'Cost Center ID 1';
  }
}
