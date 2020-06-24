import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';
import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-external-headcount',
  templateUrl: './external-headcount.component.html',
  styleUrls: ['./external-headcount.component.css']
})
export class ExternalHeadcountComponent implements OnInit, AfterViewInit {
  constructor(@Inject(DOCUMENT) document) { }

  public cardValues = [

  ];

  public inputtedYears: Array<String> = [
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

  tableData = [
    ['Regional Rollout P', '2', '3', '5', '7', '6', '5', '5', '5', '5', '4', '3', '2'],
    ['Regional Rollout A', '8', '8', '8', '8', '8', '8', '10', '11', '12', '13', '14', '15'],
    ['Regional Rollout B', '9', '9', '9', '7', '7', '7', '7', '8', '8', '8', '8', '8'],
    ['Regional Rollout C', '10', '11', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
    ['Total Extern Headcount Cost per Class'],
    ['Total Extern Headcount Cost from Capa Plan', '', '', '', '', '', '', '', '', '', '', '', '']
  ];

  // Todo:  Temporary input for non-existent years.  Will be removed in final version
  tableDataTempInput = [
    ['Regional Rollout P', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Regional Rollout A', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Regional Rollout B', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Regional Rollout C', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Total Extern Headcount Cost per Class', '', '', '', '', '', '', '', '', '', '', '', ''],
    ['Total Extern Headcount Cost from Capa Plan', '', '', '', '', '', '', '', '', '', '', '', ''],
  ];
  isShowingNewYear = false;
  // TODO: END TODO

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  totalExternHeadcountCostPerClassIndex = 4;
  showInputField: boolean;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  ngOnInit(): void {
    this.fillTable();
    this.fillCards();
  }

  ngAfterViewInit() {
    this.tableResized();
    this.changeActiveYear(null, this.getCurrentYear().toString(10));
  }

  fillCards() {
    for (let i = 0; i < 4; i++) {
      this.cardValues.push(this.getSumOfRow(i));
    }
  }
  getSumOfRow(row: number) {
    let total = 0;
    for (let i = 1; i <= 12; i++) {
      total += parseInt(this.tableData[row][i], 10);
    }
    return total;
  }

  fillTable() {
    for (let i = 1; i <= 12; i++) {
      this.tableData[this.totalExternHeadcountCostPerClassIndex].push(
        (50 * parseInt(this.tableData[0][i], 10) +
          45 * parseInt(this.tableData[1][i], 10) +
          40 * parseInt(this.tableData[2][i], 10) +
          35 * parseInt(this.tableData[3][i], 10)) + ''
      );
    }
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

  getDomElementFromEvent(event): HTMLElement {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    return document.getElementById(value);

  }

  sleep(ms: number): Observable<number> {
    return timer(ms);
  }

  getYearScrollbarNewHeight(): string {
    const table = document.getElementById('internalHeadcountTable');
    const tableHeight = table.offsetHeight;
    const yearHeaderHeight = document.getElementById('yearHeader').offsetHeight;
    return `${(tableHeight - yearHeaderHeight - 6).toString()}px`;
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
    if (i !== this.tableData.length - 2) {
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
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.tableData.length || this.selectedRowNumber < 0)
      && this.selectedRowNumber !== this.totalExternHeadcountCostPerClassIndex;
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
