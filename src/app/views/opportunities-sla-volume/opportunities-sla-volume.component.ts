import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-opportunities-sla-volume',
  templateUrl: './opportunities-sla-volume.component.html',
  styleUrls: ['./opportunities-sla-volume.component.css']
})
export class OpportunitiesSlaVolumeComponent implements OnInit {

  constructor() {}

  tableHeaders = [
    'SLA No',
    'SLA Name',
    'Cost Center',
    'Template Name',
    'Service Dept',
    'SLA Start',
    'SLA End',
    'Manday Input',
    'MBT Manday Input',
    'Manday Cost',
    'Regional Travel Flight',
    'Regional Travel Days',
    'Travel Expense',
    'Long Distance Travel Flight',
    'Long Distance Travel Day',
    'Travel Expense',
    'Dom Travel Flight',
    'Dom Travel Day',
    'Travel Expense',
    'Travel Cost',
    'Fix Costs',
    'Total Fix Costs',
    'SLA Volume',
    'Probability in %'
  ];

  tableData = [
    ['SLA20_ITTQT_OP1', 'Mercedes Me Connect Aftersales Rollout 5', '0000036140 - Regional Rollout E4', 'Xentry', 'SAP SD', '01.01.2020', '31.12.2020', '2.420', ' ', '617.100', '5', '20', '5', '1', '5', '1', '2', '2', '2', '111.151', '140.000', '140.000', '136.040',  '30%'],
    ['SLA20_ITTQT_OP2', 'Mercedes Me Connect 2', '0000036140 - Regional Rollout E4', 'Xentry', 'SAP SD', '01.01.2020', '31.12.2020', '2.420', ' ',  '617.100', '5', '20', '5', '1', '5', '1', '2', '2', '2', '111.151', '140.000', '140.000', '136.040', '25%'],
    ['SLA20_ITTQT_OP3', 'Mercedes me connect 1', '0000036140 - Regional Rollout E5', 'Xentry', 'SAP SD', '01.01.2020', '31.12.2020', '1.889', ' ',  '481.695', '5', '20', '5', '1', '5', '1', '2', '2', '2', '111.151', '140.000', '140.000', '136.040', '45%'],
    ['SLA20_ITTQT_OP4', 'Cyber Security Lighthouse Program', '0000036140 - Regional Rollout E5', 'Xentry', 'SAP SD', '01.01.2020', '31.12.2020', '660', ' ',  '168.300', '5', '20', '5', '1', '5', '1', '2', '2', '2', '111.151', '140.000', '140.000', '136.040', '87%'],
    ['SLA20_ITTQT_OP5', 'EPA Coordination', '0000036140 - Regional Rollout E4', 'Xentry', 'SAP SD',  '01.01.2020', '31.12.2020', '440', ' ',  '112.200', '5', '20', '5', '1', '5', '1', '2', '2', '2', '111.151', '140.000', '140.000', '136.040', '78%'],
  ];

  costCenters = [
    '0000036140 - Regional Rollout E2',
    '0000036140 - Regional Rollout E3',
    '0000036140 - Regional Rollout E4',
    '0000036140 - Regional Rollout E5'
  ];

  // Input = 0, dropdown = 1, datepicker = 2
  typeInput = 0;
  typeDropdown = 1;
  typeDatepicker = 2;
  tableDataInputType = [0, 0, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  disabledHeaders = [
    'Manday Cost',
    'Travel Expense',
    'Travel Cost',
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  showAddCard: boolean;
  showUpdateCard: boolean;
  selectedRowNumber: number = -1;

  slaTotalIndex = -2;
  slaTotal: string = '0';


  ngOnInit(): void {
    this.updateSlaTotal();
  }

  formatDateForInput(date: string) {
    const arr = date.split('.');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }

  updateSlaTotal() {
    this.slaTotal = '680.200';
  }

  isInputDisabled(columnNumber: number, isAddInput = false): boolean {
    if (this.disabledHeaders.indexOf(this.tableHeaders[columnNumber]) >= 0) {
      return true;
    }
    if (isAddInput) {
      return false;
    }
    return this.tableData[this.selectedRowNumber][columnNumber] === '-';
  }

  isAddInputDisabled(columnNumber: number) {
    return this.isInputDisabled(columnNumber, true);
  }

  getPlaceHolderForAddCardFields(columnNumber: number): string {
    if (columnNumber === 0) {
      return this.getNextSLAName();
    }
  }

  getPlaceHolderForUpdateCardFields(columnNumber: number): string {
    return 'Ex. 4';
  }

  onAddSubmit() {
    this.closeAddCard();
  }

  onUpdateSubmit() {
    this.closeUpdateCard();
    this.clearClickedRow();
  }

  closeAddCard() {
    this.showAddCard = false;
  }
  closeUpdateCard() {
    this.showUpdateCard = false;
  }

  openAddCard() {
    this.showAddCard = true;
  }

  openUpdateCard() {
    this.showUpdateCard = true;
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
    this.closeUpdateCard();
  }

  clearClickedRow() {
    this.saveClickedRow(-1);
  }

  onAddClick() {
    if (this.showAddCard) {
      this.closeAddCard();
    } else {
      this.openAddCard();
    }
  }

  onUpdateClick() {
    if (this.isSelectedRowNumberValid()) {
      if (this.showUpdateCard) {
        this.closeUpdateCard();
      } else {
        this.openUpdateCard();
      }
    }
  }

  isSelectedRowNumberValid() {
    return this.selectedRowNumber >= 0;
  }


  getNextSLAName(): string {
    return 'SLA20_ITTQT_114';
  }

  getDefaultValueForAddCard(columnNumber: number) {
    return ' ';
  }

  getDefaultValueForUpdateCard(columnNumber: number) {
    return this.tableData[this.selectedRowNumber][columnNumber];
  }
}
