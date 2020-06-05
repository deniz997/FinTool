import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {IOption} from 'ng-select';
import PerfectScrollbar from 'perfect-scrollbar';
import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-external-headcount',
  templateUrl: './external-headcount.component.html',
  styleUrls: ['./external-headcount.component.css']
})
export class ExternalHeadcountComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) { }

  public cardValues = [

  ];

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

  tableData = [
    ['Regional Rollout P', '2', '3', '5', '7', '6', '5', '5', '5', '5', '4', '3', '2'],
    ['Regional Rollout A', '8', '8', '8', '8', '8', '8', '10', '11', '12', '13', '14', '15'],
    ['Regional Rollout B', '9', '9', '9', '7', '7', '7', '7', '8', '8', '8', '8', '8'],
    ['Regional Rollout C', '10', '11', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
    ['Total Extern Headcount Cost per Class'],
    ['Total Extern Headcount Cost from Capa Plan', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
  ];

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  totalExternHeadcountCostPerClassIndex = 4;
  showInputField: boolean;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  ngOnInit(): void {
    this.sleep(150).subscribe(_ => {
      this.tableResized();
    });
    this.fillTable();
    this.fillCards();
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

  showYear(year: string, event) {
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
    this.closeInputCard();
    this.clearClickedRow();
    this.updateSizeOnUpdateButtonAppearanceChange();
  }

}
