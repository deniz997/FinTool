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
    'Service Department',
    'SLA Start Date',
    'SLA End Date',
    'Manday Input',
    'Manday Cost',
    'Regional Travel Flight',
    'Regional Travel Day',
    'Long Distance Travel Flight',
    'Long Distance Travel Day',
    'Domestic Travel Flight',
    'Domestic Travel Day',
    'Travel Expense',
    'Fix Costs',
    'SLA Volume',
    'SLA Consumption',
    'SLA Consumption in %'
  ];

  tableData = [
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', '0000036140 - Regional Rollout E4',  'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
    ['SLA20_ITTQT_009', 'Mercedes Me Connect 2', '0000036140 - Regional Rollout E4',  'MeConnectS', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '168', '504', '24', '120', '-', '-', '192', '70.000', '967.516', '248.241', '25%'],
    ['SLA20_ITTQT_012', 'Mercedes me connect 1', '0000036140 - Regional Rollout E4',  'MeConnectS', 'RO', '01.01.2020', '31.12.2020', '1.889', '481.695', '135', '405', '20', '100', '-', '-', '155', '70.000', '780.440', '451.684', '45%'],
    ['SLA20_ITTQT_106', 'Cyber Security Lighthouse Program', '0000036140 - Regional Rollout E4',  'Cyber Security', 'RO', '01.01.2020', '31.12.2020', '660', '168.300', '75', '175', '-', '-', '-', '-', '75', '0', '233.375', '201.574', '87%'],
    ['SLA20_ITTQT_113', 'EPA Coordination', '0000036140 - Regional Rollout E4',  'Cyber Security', 'RO', '01.01.2020', '31.12.2020', '440', '112.200', '24', '68', '-', '-', '-', '-', '24', '0', '135.172', '101.554', '78%'],
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  showInputField: boolean;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;


  ngOnInit(): void {}

  isInputDisabled(columnNumber: number): boolean {
    if (!this.isSelectedRowNumberValid()) {
      return false;
    }
    return this.tableData[this.selectedRowNumber][columnNumber] === '-';
  }

  getPlaceHolderForInputFields(columnNumber: number): string {
    if (!this.isSelectedRowNumberValid()) {
      if (columnNumber === 0) {
        return this.getNextSLAName();
      }
    }
    return 'Ex. 4';
  }

  submit() {
    this.closeInputCard();
    this.clearClickedRow();
  }

  closeInputCard() {
    this.showInputField = false;
  }

  openInputCard() {
    this.showInputField = true;
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
    this.closeInputCard();
  }

  isSelectedRowNumberValid() {
    this.updateValidSelectedRowNumber();
    return this.validSelectedRowNumber;
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0);
  }

  clearClickedRow() {
    this.saveClickedRow(-1);
  }

  openAddCard() {
    this.saveClickedRow(this.tableData.length);
    this.clearClickedRow();
    this.openInputCard();
  }

  openUpdateCard() {
    this.openInputCard();
  }

  getNextSLAName(): string {
    return 'SLA20_ITTQT_114';
  }
  getDefaultValueForInput(columnNumber: number) {
    if (!this.isSelectedRowNumberValid()) {
      if (columnNumber === 0) {
        return this.getNextSLAName();
      } else {
        return ' ';
      }
    }
    return this.tableData[this.selectedRowNumber][columnNumber];
  }
}
