import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-actual-sla-volume',
  templateUrl: './actual-sla-volume.component.html',
  styleUrls: ['./actual-sla-volume.component.css']
})
export class ActualSlaVolumeComponent implements OnInit {

  constructor() { }
  currentSLA: any;
  rightTableFirstCellHeader = 'SLA No';

  rightTableHeaders = [
    'SLA Name',
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
    'SLA Consumption in %',
  ];


  rightTableData = [
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
    ['SLA20_ITTQT_009', 'Mercedes Me Connect 2', 'MeConnectS', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '168', '504', '24', '120', '-', '-', '192', '70.000', '967.516', '248.241', '25%'],
    ['SLA20_ITTQT_012', 'Mercedes me connect 1', 'MeConnectS', 'RO', '01.01.2020', '31.12.2020', '1.889', '481.695', '135', '405', '20', '100', '-', '-', '155', '70.000', '780.440', '451.684', '45%'],
    ['SLA20_ITTQT_106', 'Cyber Security Lighthouse Program', 'Cyber Security', 'RO', '01.01.2020', '31.12.2020', '660', '168.300', '75', '175', '-', '-', '-', '-', '75', '0', '233.375', '201.574', '87%'],
    ['SLA20_ITTQT_113', 'EPA Coordination', 'Cyber Security', 'RO', '01.01.2020', '31.12.2020', '440', '112.200', '24', '68', '-', '-', '-', '-', '24', '0', '135.172', '101.554', '78%'],
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;
  public SLANos: Array<IOption> = [
    {label: 'SLA20_ITTQT_008', value: 'SLA20_ITTQT_008'},
    {label: 'SLA20_ITTQT_009', value: 'SLA20_ITTQT_009'},
    {label: 'SLA20_ITTQT_012', value: 'SLA20_ITTQT_012'},
    {label: 'SLA20_ITTQT_106', value: 'SLA20_ITTQT_106'},
    {label: 'SLA20_ITTQT_113', value: 'SLA20_ITTQT_113'},
  ];
  showInputField: boolean;
  clickedRow = [];
  showPicker: boolean;

  ngOnInit(): void {
    this.clickedRow.push('');
    this.rightTableHeaders.forEach(_ => {
      this.clickedRow.push('');
    });
  }

  isInputDisabled(i: number): boolean {
    const currentSLA = this.currentSLA;
    if (this.currentSLA === this.getNextSLAName() && i === 0) {
      return true;
    }
    for (const row of this.rightTableData) {
      if (row[0] === currentSLA) {
        return row[i] === '-';
      }
    }
    return false;
  }

  getPlaceHolderForInputFields(i: number): string {
    if (this.currentSLA === this.getNextSLAName() && i === 0) {
      return 'SLA20_ITTQT_114';
    } else {
      return 'Ex. 4';
    }
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
    this.emptyClickedRow();
    this.rightTableData[i].forEach(value => {
      this.clickedRow.push(value);
    });
  }

  onTableRowClick(i: number) {
    this.currentSLA = this.rightTableData[i][0];
    this.saveClickedRow(i);
    this.openInputCard();
  }

  emptyClickedRow() {
    this.clickedRow = [];
  }

  clearClickedRow() {
    for (let i = 0; i < this.clickedRow.length; i++) {
      this.clickedRow[i] = '';
    }
  }

  openAddCard() {
    this.showPicker = false;
    this.clearClickedRow();
    this.currentSLA = this.getNextSLAName();
    this.openInputCard();
  }

  openEditCard() {
    this.showPicker = true;
    this.currentSLA = null;
    this.openInputCard();
  }

  getNextSLAName(): string {
    return 'SLA20_ITTQT_114';
  }

  onSelect() {
    let index = 0;
    if (this.currentSLA === this.getNextSLAName()) {
      this.clearClickedRow();
    }
    for (const row of this.rightTableData) {
      if (row[0] === this.currentSLA) {
        this.saveClickedRow(index);
        return;
      }
      index++;
    }
  }
}
