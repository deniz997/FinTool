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
    this.tableData = [
      {
        CostCenterID: '0000036100',
        CostCenterName: 'SAP & Rollout Service Delivery Turkey',
        CostCenterTyp: 'Cost Center Typ 1'
      },
      {
        CostCenterID: '0000036110',
        CostCenterName: 'SAP Service Delivery & Operations Turkey',
        CostCenterTyp: 'Cost Center Typ 1'
      },
      {
        CostCenterID: '0000036120',
        CostCenterName: 'SAP Service Delivery & Operations Turkey',
        CostCenterTyp: 'Cost Center Typ 2'
      },
      {
        CostCenterID: '0000036130',
        CostCenterName: 'SAP Service Delivery & Operations Turkey',
        CostCenterTyp: 'Cost Center Typ 2'
      },
      {
        CostCenterID: '0000036140',
        CostCenterName: 'Regional Rollout',
        CostCenterTyp: 'Cost Center Typ 2'
      },
      {
        CostCenterID: '0000036150',
        CostCenterName: 'Strategy & Performance Management',
        CostCenterTyp: 'Cost Center Typ 2'
      },
      {
        CostCenterID: '0000036160',
        CostCenterName: 'CoC PDM/BOM, Change Mgmt. & Engineering Services',
        CostCenterTyp: 'Cost Center Typ 2'
      },
      {
        CostCenterID: '0000036170',
        CostCenterName: 'Analytics & Digital Solutions',
        CostCenterTyp: 'Cost Center Typ 2'
      },
      {
        CostCenterID: '0000036170',
        CostCenterName: 'Analytics & Digital Solutions',
        CostCenterTyp: 'Cost Center Typ 2'
      },
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  tableHeaders = [
    'Cost Center ID',
    'Cost Center Name',
    'Cost Center Typ',
  ];

  tableData = [];

  selectedRow: string;
  setClickedRow: Function;

  showAdd = false;
  showUpdate = false;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  totalItems: number = 60;
  currentPage: number   = 1;
  itemPerPage: number = 5;
  maxSize: number = 7;

  public costCenterTyp: Array<IOption> = [
    {label: 'Cost Center Typ 1', value: 'Typ1'},
    {label: 'Cost Center Typ 2', value: 'Typ2'},
  ];

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
    this.closeUpdateCard();
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0);
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
  }

  SetSelectedRow(): void {
    this.selectedRowNumber = null;
  }
}
