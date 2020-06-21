import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-user-parameter',
  templateUrl: './user-parameter.component.html',
  styleUrls: ['./user-parameter.component.css']
})
export class UserParameterComponent implements OnInit {

  constructor() { }

  tableHeaders = [
    'Who is Who ID',
    'Cost Center',
    'Name',
    'User Typ',
    'FTE Capacity',
    'Type of Employment',
    'Assignment Status',
    'Current Level',
    'Hiring Time Frame',
  ];

  tableData = [
    ['ID_001', 'SAP Service Delivery & Operations Turkey', 'Yavuz Saka', 'E4', 'FTE Capacity 1', 'Type 1', 'Assignment Status 1', 'Current Level 1', 'Hiring Time Frame 1'],
    ['ID_002', 'SAP Service Delivery & Operations Turkey', 'Josef Aksac', 'E4', 'FTE Capacity 2', 'Type 2', 'Assignment Status 2', 'Current Level 2', 'Hiring Time Frame 2'],
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0);
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
  }

  ngOnInit(): void {
  }

  SetSelectedRow(): void {
    this.selectedRowNumber = null;
  }

}
