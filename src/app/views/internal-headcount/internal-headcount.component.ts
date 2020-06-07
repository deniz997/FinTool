import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';
import {Observable, timer} from 'rxjs';


@Component({
  selector: 'app-internal-headcount',
  templateUrl: './internal-headcount.component.html',
  styleUrls: ['./internal-headcount.component.css']
})
export class InternalHeadcountComponent implements OnInit {

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
    ['0000036140 - Regional Rollout E4', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '32'],
    ['0000036140 - Regional Rollout E5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '190'],
    ['0000036140 - Regional Rollout Memur', '50', '49', '49', '49', '49', '49', '51', '54', '56', '57', '58', '59', '53', '1113'],
    ['Total', '56', '55', '55', '55', '55', '55', '57', '60', '62', '63', '64', '65', '59', '1335']
  ];

  showInputField: boolean;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  sleep(ms: number): Observable<number> {
    return timer(ms);
  }


  ngOnInit(): void {
    this.sleep(150).subscribe(_ => {
      this.tableResized();
    });
  }

  showYear(year: string, event) {
    console.log(year);

    const myDom = this.getDomElementFromEvent(event);
    const children = myDom.parentElement.parentElement.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains('active')) {
        child.classList.remove('active');
        break;
      }
    }
    myDom.parentElement.classList.add('active');
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
    if (i !== this.tableData.length - 1) {
      this.saveClickedRow(i);
    }
    this.closeInputCard();
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


  openUpdateCard() {
    this.openInputCard();
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
    this.closeInputCard();
    this.clearClickedRow();
    this.updateSizeOnUpdateButtonAppearanceChange();
  }
}
