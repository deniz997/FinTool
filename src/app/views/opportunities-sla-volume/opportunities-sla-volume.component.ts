import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

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
    'Template Name',
    'SLA Start Date',
    'SLA End Date',
    'Manday Input',
    'Manday Typ',
    'Regional Travel Flight',
    'Regional Travel Day',
    'Long Distance Travel Flight',
    'Long Distance Travel Day',
    'Domestic Travel Flight',
    'Domestic Travel Day',
    'Fix Costs',
    'Probability in %'
  ];

  tableData = [
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '70.000', '30%'],
    ['SLA20_ITTQT_009', 'Mercedes Me Connect 2', 'MeConnectS', '01.01.2020', '31.12.2020', '2.420', '617.100', '168', '504', '24', '120', '-', '-', '70.000', '25%'],
    ['SLA20_ITTQT_012', 'Mercedes me connect 1', 'MeConnectS', '01.01.2020', '31.12.2020', '1.889', '481.695', '135', '405', '20', '100', '-', '-', '70.000', '45%'],
    ['SLA20_ITTQT_106', 'Cyber Security Lighthouse Program', 'Cyber Security', '01.01.2020', '31.12.2020', '660', '168.300', '75', '175', '-', '-', '-', '-', '0', '87%'],
    ['SLA20_ITTQT_113', 'EPA Coordination', 'Cyber Security', '01.01.2020', '31.12.2020', '440', '112.200', '24', '68', '-', '-', '-', '-', '0', '78%'],
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  showInputField: boolean;
  selectedRowNumber: number;

  ngOnInit(): void {}

  isInputDisabled(columnNumber: number): boolean {
    if (this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0) {
      return columnNumber === 0;
    }
    return this.tableData[this.selectedRowNumber][columnNumber] === '-';
  }

  getPlaceHolderForInputFields(columnNumber: number): string {
    if (this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0) {
      if(columnNumber === 0) {
        return this.getNextSLAName();
      }
    }
    return 'Ex. 4';
  }

  submit() {
    this.closeInputCard();
  }

  closeInputCard() {
    this.showInputField = false;
  }

  openInputCard() {
    this.showInputField = true;
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
    this.openInputCard();
  }

  clearClickedRow() {
    this.selectedRowNumber = -1;
  }

  openAddCard() {
    this.selectedRowNumber = this.tableData.length;
    this.clearClickedRow();
    this.openInputCard();
  }

  openEditCard() {
    this.openInputCard();
  }

  getNextSLAName(): string {
    return 'SLA20_ITTQT_114';
  }

  getDefaultValueForInput(columnNumber: number) {
    if (this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0) {
      if (columnNumber === 0) {
        return this.getNextSLAName();
      } else {
        return ' ';
      }
    }
    return this.tableData[this.selectedRowNumber][columnNumber];
  }
}
