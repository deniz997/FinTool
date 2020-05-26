import {Component, Inject, OnInit} from '@angular/core';
import {IOption} from 'ng-select';
import {DOCUMENT} from '@angular/common';
import PerfectScrollbar from 'perfect-scrollbar';
import {timer} from 'rxjs';


@Component({
  selector: 'app-internal-headcount',
  templateUrl: './internal-headcount.component.html',
  styleUrls: ['./internal-headcount.component.css']
})
export class InternalHeadcountComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  // costCategories: Array<String> = ['Primary Cost', 'Project Cost Indirect Chargeable'];
  public costCenters: Array<IOption> = [
    {label: 'Regional Rollout E4', value: 'E4'},
    {label: 'Regional Rollout E5', value: 'E5'},
    {label: 'Regional Rollout Memur', value: 'Memur'},
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
  currentCostCenter: any;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  ngOnInit(): void {
    timer(150).subscribe(_ => {
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
