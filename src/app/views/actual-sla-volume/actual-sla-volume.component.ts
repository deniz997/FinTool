import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-actual-sla-volume',
  templateUrl: './actual-sla-volume.component.html',
  styleUrls: ['./actual-sla-volume.component.css']
})
export class ActualSlaVolumeComponent implements OnInit {

  constructor() { }

  tableHeaders = [
    'SLA No',
    'SLA Name',
    'Cost Center',
    'Template Name',
    'Service Dept',
    'SLA Start',
    'SLA End',
    'Manday Input',
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
    'One time Costs',
    'SLA Volume',
  ];

  tableData = [
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', '0000036140 - Regional Rollout E4',  'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '185', '9', '46', '9', '-', '-', '-', '258.922', '70.000', '946.002'],
    ['SLA20_ITTQT_009', 'Mercedes Me Connect 2', '0000036140 - Regional Rollout E4',  'MeConnectS', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '168', '504', '168', '24', '120', '24', '-', '-', '-', '280.416', '70.000', '967.516'],
    ['SLA20_ITTQT_012', 'Mercedes me connect 1', '0000036140 - Regional Rollout E4',  'MeConnectS', 'RO', '01.01.2020', '31.12.2020', '1.889', '481.695', '135', '405', '135', '20', '100', '20',  '-', '-', '-', '228.745', '70.000', '780.440'],
    ['SLA20_ITTQT_106', 'Cyber Security Lighthouse Program', '0000036140 - Regional Rollout E4',  'Cyber Security', 'RO', '01.01.2020', '31.12.2020', '660', '168.300', '75', '175', '75', '-', '-', '-', '-', '-', '-', '65.075', '0', '233.375'],
    ['SLA20_ITTQT_113', 'EPA Coordination', '0000036140 - Regional Rollout E4',  'Cyber Security', 'RO', '01.01.2020', '31.12.2020', '440', '112.200', '24', '68', '24', '-', '-', '-', '-', '-', '-', '22.972', '0', '135.172'],
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

  slaTotalIndex = -1;
  slaTotal: string = '0';


  ngOnInit(): void {
    this.updateSlaTotal();
  }

  formatDateForInput(date: string) {
    const arr = date.split('.');
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }

  updateSlaTotal() {
    this.slaTotal = '3.062.505';
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
