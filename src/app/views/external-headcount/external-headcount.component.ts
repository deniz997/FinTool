import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {IOption} from 'ng-select';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-external-headcount',
  templateUrl: './external-headcount.component.html',
  styleUrls: ['./external-headcount.component.css']
})
export class ExternalHeadcountComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) { }

  // costCategories: Array<String> = ['Primary Cost', 'Project Cost Indirect Chargeable'];
  public costCenters: Array<IOption> = [
    {label: 'Regional Rollout P', value: 'P'},
    {label: 'Regional Rollout A', value: 'A'},
    {label: 'Regional Rollout B', value: 'B'},
    {label: 'Regional Rollout C', value: 'C'},
    {label: 'Total Extern Headcount Cost from Capa Plan', value: 'Capa Plan'}
  ];

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

  public regionalRolloutPValues = [
    2, 3, 5, 7, 6, 5, 5, 5, 5, 4, 3, 2
  ];

  public regionalRolloutAValues = [
    8, 8, 8, 8, 8, 8, 10, 11, 12, 13, 14, 15
  ];

  public regionalRolloutBValues = [
    9, 9, 9, 7, 7, 7, 7, 8, 8, 8, 8, 8
  ];

  public regionalRolloutCValues = [
    10, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12
  ];

  public totalExternHeadCountCostPerClass = [];

  public totalExternHeadCountCostFromCapaPlan = [
    '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'
  ];

  ngOnInit(): void {
    this.tableResized();
    this.fillTable();
    this.fillCards();
  }

  fillCards() {
    let total = 0;
    this.regionalRolloutPValues.forEach(value => total += value);
    this.cardValues.push(total);
    total = 0;
    this.regionalRolloutAValues.forEach(value => total += value);
    this.cardValues.push(total);
    total = 0;
    this.regionalRolloutBValues.forEach(value => total += value);
    this.cardValues.push(total);
    total = 0;
    this.regionalRolloutCValues.forEach(value => total += value);
    this.cardValues.push(total);
  }

  fillTable() {
    this.regionalRolloutCValues.forEach((value, index) => {
      this.totalExternHeadCountCostPerClass.push(
        50 * this.regionalRolloutPValues[index] +
        45 * this.regionalRolloutAValues[index] +
        40 * this.regionalRolloutBValues[index] +
        35 * this.regionalRolloutCValues[index]
      );
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
    const table = document.getElementById('internalHeadcountTable');
    const ps = new PerfectScrollbar('#yearScrollbar');
    const tableHeight = table.offsetHeight;
    const yearHeaderHeight = document.getElementById('yearHeader').offsetHeight;
    const newHeight = `${(tableHeight - yearHeaderHeight - 6).toString()}px`;
    document.getElementById('yearScrollbar').style.height = newHeight;
    ps.update();
  }

  getDomElementFromEvent(event): HTMLElement {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    return document.getElementById(value);

  }

}
