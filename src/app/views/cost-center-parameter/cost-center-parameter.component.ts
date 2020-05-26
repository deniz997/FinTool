import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {ngbAutoClose} from '@ng-bootstrap/ng-bootstrap/util/autoclose';

@Component({
  selector: 'app-cost-center-parameter',
  templateUrl: './cost-center-parameter.component.html',
  styleUrls: ['./cost-center-parameter.component.css']
})
export class CostCenterParameterComponent implements OnInit {

  setClickedRow: Function;
  selectedRow: number;
  costcenters: [{ costcenterID: string; costcentername: string; costcentertyp: string }, { costcenterID: string; costcentername: string; costcentertyp: string }, { costcenterID: string; costcentername: string; costcentertyp: string }];
  constructor() {
    this.costcenters = [{
      costcenterID: 'Cost Center ID 1',
      costcentername: 'Cost Center Name 1',
      costcentertyp: 'Cost Center Typ 1'
    },
    {
      costcenterID: 'Cost Center ID 2',
      costcentername: 'Cost Center Name 2',
      costcentertyp: 'Cost Center Typ 1'
    },
    {
      costcenterID: 'Cost Center ID 3',
      costcentername: 'Cost Center Name 3',
      costcentertyp: 'Cost Center Typ 2'
    }];
    this.setClickedRow = function (index) {
        this.selectedRow = index;
    };
  }

  show = false;

  totalItems: number = 64;
  currentPage: number   = 1;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

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

}
