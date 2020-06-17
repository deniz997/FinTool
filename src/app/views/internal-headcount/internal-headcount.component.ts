import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';
import {Observable, timer} from 'rxjs';


@Component({
  selector: 'app-internal-headcount',
  templateUrl: './internal-headcount.component.html',
  styleUrls: ['./internal-headcount.component.css']
})
export class InternalHeadcountComponent implements OnInit, AfterViewInit {

  constructor(@Inject(DOCUMENT) document) { }

  public inputtedYears: Array<String> = [
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
  ];
  currentCostCenter: any;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  tableData = [
    ['0000036100 - SAP & Rollout Service Delivery Turkey', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '32'],
    ['0000036110 - SAP Service Delivery & Operations Turkey', '12', '12', '12', '13', '14', '15', '15', '14', '11', '14', '14', '14', '13', '190'],
    ['0000036120 - SAP Service Delivery & Operations Turkey', '32', '30', '29', '29', '30', '30', '31', '31', '31', '31', '31', '31', '31', '425'],
    ['0000036130 - SAP Service Delivery & Operations Turkey', '21', '21', '22', '24', '27', '30', '30', '31', '31', '31', '32', '32', '28', '376'],
    ['0000036140 - Regional Rollout', '33', '34', '33', '33', '33', '33', '33', '33', '33', '33', '35', '35', '33', '1024'],
    ['0000036150 - Strategy & Performance Management', '12', '11', '12', '12', '12', '13', '13', '13', '13', '13', '13', '13', '13', '2045'],
    ['0000036160 - CoC PDM/BOM, Change Mgmt. & Engineering Services', '24', '25', '26', '35', '37', '40', '40', '41', '43', '43', '43', '43', '37', '750'],
    ['0000036170 - Analytics & Digital Solutions', '24', '25', '25', '24', '24', '26', '26', '26', '26', '26', '26', '26', '25', '620'],
    ['Total', '159', '159', '160', '171', '178', '188', '189', '190', '189', '192', '195', '195', '180', '5.462']
  ];


  // Todo:  Temporary input for non-existent years.  Will be removed in final version
  tableDataTempInput = [
    ['0000036100 - SAP & Rollout Service Delivery Turkey', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036110 - SAP Service Delivery & Operations Turkey', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036120 - SAP Service Delivery & Operations Turkey', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036130 - SAP Service Delivery & Operations Turkey', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036140 - Regional Rollout', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036150 - Strategy & Performance Management', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036160 - CoC PDM/BOM, Change Mgmt. & Engineering Services', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['0000036170 - Analytics & Digital Solutions', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Total', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ];
  isShowingNewYear = false;
  // TODO: END TODO

  showInputField: boolean;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  sleep(ms: number): Observable<number> {
    return timer(ms);
  }


  ngOnInit(): void {}

  ngAfterViewInit() {
    this.tableResized();
    this.changeActiveYear(null, this.getCurrentYear().toString(10));
  }

  showYearsTableData(year: string) {
    const current = this.getCurrentYear();
    if (!this.isShowingNewYear && parseInt(year, 10) > current
      || this.isShowingNewYear && parseInt(year, 10) <= current) {
      let temp: Array<Array<string>>;
      temp = this.tableData;
      this.tableData = this.tableDataTempInput;
      this.tableDataTempInput = temp;
      this.isShowingNewYear = !this.isShowingNewYear;
    }
  }

  onYearClick(year: string, event) {
    this.changeActiveYear(this.getYearDom(event));
    this.showYearsTableData(year);
  }

  getCurrentYear() {
    return new Date(Date.now()).getFullYear();
  }

  getYearDom(event?, year?: string) {
    if (event != null) {
      return this.getDomElementFromEvent(event);
    }
    return document.getElementById(year + 'Selector');
  }

  changeActiveYear(yearButtonDom, year?: string) {
    if (yearButtonDom == null) {
      yearButtonDom = this.getYearDom(null, year);
    }
    const children = yearButtonDom.parentElement.parentElement.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains('active')) {
        child.classList.remove('active');
        break;
      }
    }
    yearButtonDom.parentElement.classList.add('active');
  }

  tableResized() {
    const ps = new PerfectScrollbar('#yearScrollbar');
    document.getElementById('yearScrollbar').style.height = this.getYearScrollbarNewHeight();
    ps.update();
  }

  getYearScrollbarNewHeight(): string {
    const table = document.getElementById('internalHeadcountTable');
    const tableHeight = table.offsetHeight;
    const yearHeaderHeight = document.getElementById('yearHeader').offsetHeight;
    return `${(tableHeight - yearHeaderHeight - 6).toString()}px`;
  }

  getDomElementFromEvent(event): HTMLElement {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    return document.getElementById(value);

  }

  closeUpdateCard() {
    this.showInputField = false;
  }

  openUpdateCard() {
    this.showInputField = true;
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  onTableRowClick(i: number) {
    if (i !== this.tableData.length - 1) {
      this.saveClickedRow(i);
    }
    this.closeUpdateCard();
    this.updateSizeOnUpdateButtonAppearanceChange();
  }

  updateSizeOnUpdateButtonAppearanceChange() {
    this.tableResized();
    this.sleep(5).subscribe(() => {
      if (this.getYearScrollbarNewHeight() !== document.getElementById('yearScrollbar').style.height) {
        this.updateSizeOnUpdateButtonAppearanceChange();
      }
    });
  }

  onUpdateCardClick() {
    if (this.showInputField) {
      this.closeUpdateCard();
    } else {
      this.openUpdateCard();
    }
  }


  clearClickedRow() {
    this.saveClickedRow(-1);
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0);
  }

  getDefaultValueForInput(columnNumber: number) {
    return this.tableData[this.selectedRowNumber][columnNumber + 1];
  }

  getPlaceHolderForInputFields(columnNumber: number): string {

    return 'Ex. 4';
  }

  submit() {
    this.closeUpdateCard();
    this.clearClickedRow();
    this.updateSizeOnUpdateButtonAppearanceChange();
  }
}
