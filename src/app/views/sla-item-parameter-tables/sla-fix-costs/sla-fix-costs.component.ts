import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {IOption} from 'ng-select';
import PerfectScrollbar from "perfect-scrollbar";

@Component({
  selector: 'app-sla-fix-costs',
  templateUrl: './sla-fix-costs.component.html',
  styleUrls: ['./sla-fix-costs.component.css']
})
export class SlaFixCostsComponent implements OnInit, AfterViewInit {

  private data = [];
  private setClickedRow: (index) => void;

  constructor(@Inject(DOCUMENT) document, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.data = [
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/10/01',
        FixCostsTyp: 'Fix E5',
        FixCostsRate: '100'
      },
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/12/01',
        FixCostsTyp: 'Monitoring',
        FixCostsRate: '90'
      },
      {
        Year: '2019',
        ValidFrom: '2019/01/01',
        ValidTo: '2019/12/01',
        FixCostsTyp: 'Monitoring',
        FixCostsRate: '120'
      },
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  //Years for Scroll
  public inputtedYears: Array<String> = [

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
    '2027',
    '2028',
    '2029',
  ];


  selectedRow: Function;

  tableSubHeaders = [
    'Year',
    'Valid From',
    'Valid To',
    'Fix Costs Typ',
    'Fix Costs Rate',
  ];

  showAdd = false;
  showUpdate = false;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 3;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  filterYear: string = '2020';

  public year: Array<IOption> = [
    {label: '2020', value: 'Year1'},
    {label: '2019', value: 'Year2'},
    {label: '2018', value: 'Year3'},
    {label: '2017', value: 'Year4'},
    {label: '2016', value: 'Year5'},
    {label: '2015', value: 'Year6'},
  ];

  public fixCostsTyp: Array<IOption> = [
    {label: 'Monitoring', value: 'Monitoring'},
    {label: 'Licence', value: 'Licence'},
    {label: 'Fix E5 Costs', value: 'Fix E5 Costs'},
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.tableResized();
  }

  onYearClick(Year: string){
    this.filterYear = Year;
    this.tableResized();
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

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
    this.closeUpdateCard();
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.data.length || this.selectedRowNumber < 0);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  showAddCard() {
    this.showAdd = !this.showAdd;
  }

  closeAddCard() {
    this.showAdd = false;
  }

  showUpdateCard() {
    this.showUpdate = !this.showUpdate;
  }

  closeUpdateCard() {
    this.showUpdate = false;
  }

  saveAdd() {
    this.closeAddCard();
  }

  saveUpdate() {
    this.closeUpdateCard();
  }

  SetSelectedRow(): void {
    this.selectedRowNumber = null;
  }
}
