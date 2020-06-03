import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-user-parameter',
  templateUrl: './user-parameter.component.html',
  styleUrls: ['./user-parameter.component.css']
})
export class UserParameterComponent implements OnInit {

  constructor() { }

  rightTableFirstCellHeader = 'Who is Who ID';

  rightTableHeaders = [
    'Cost Center',
    'Name',
    'User Typ',
    'FTE Capacity',
    'Type of Employment',
    'Assignment Status',
    'Current Level',
    'Hiring Time Frame',
  ];

  rightTableData = [
    ['ID_001', 'Cost Center 1', 'Yavuz Saka', 'E4', 'FTE Capacity 1', 'Type 1', 'Assignment Status 1', 'Current Level 1', 'Hiring Time Frame 1'],
    ['ID_002', 'Cost Center 2', 'Josef Aksac', 'E4', 'FTE Capacity 2', 'Type 2', 'Assignment Status 2', 'Current Level 2', 'Hiring Time Frame 2'],
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  show = false;

  ShowHide(): void {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}
