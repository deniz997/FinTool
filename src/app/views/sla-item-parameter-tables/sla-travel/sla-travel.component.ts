import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {IOption} from 'ng-select';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-sla-travel',
  templateUrl: './sla-travel.component.html',
  styleUrls: ['./sla-travel.component.css']
})
export class SlaTravelComponent implements OnInit, AfterViewInit {

  private data = [];

  constructor(@Inject(DOCUMENT) document, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);


    this.data = [
      {
        Year: '2019',
        ValidFrom: '2019/01/01',
        ValidTo: '2019/12/01',
        TravelTyp: 'Domestic',
        TravelDayTyp: 'Domestic',
        TravelRate: '110',
        Currency: 'EUR'
      },
      {
        Year: '2019',
        ValidFrom: '2019/06/01',
        ValidTo: '2019/12/01',
        TravelTyp: 'Overseas',
        TravelDayTyp: 'Overseas',
        TravelRate: '99',
        Currency: 'EUR'
      },
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/05/01',
        TravelTyp: 'Regional',
        TravelDayTyp: 'Regional',
        TravelRate: '199',
        Currency: 'EUR'
      },
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/06/01',
        TravelTyp: 'Domestic',
        TravelDayTyp: 'Domestic',
        TravelRate: '99',
        Currency: 'EUR'
      },
      {
        Year: '2020',
        ValidFrom: '2020/06/01',
        ValidTo: '2020/12/01',
        TravelTyp: 'Domestic',
        TravelDayTyp: 'Domestic',
        TravelRate: '150',
        Currency: 'EUR'
      },
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/12/01',
        TravelTyp: 'Overseas',
        TravelDayTyp: 'Overseas',
        TravelRate: '230',
        Currency: 'EUR'
      },
      {
        Year: '2020',
        ValidFrom: '2020/05/01',
        ValidTo: '2020/12/31',
        TravelTyp: 'Regional',
        TravelDayTyp: 'Regional',
        TravelRate: '199',
        Currency: 'EUR'
      },

    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  selectedRow: string;
  setClickedRow: Function;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  // Years for Scroll
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

  tableSubHeaders = [
    'Year',
    'Valid From',
    'Valid To',
    'Travel Typ',
    'Travel Day Typ',
    'Travel Rate',
    'Currency',
  ];

  showAdd = false;
  showUpdate = false;

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

  public travelTyp: Array<IOption> = [
    {label: 'Regional', value: 'Regional'},
    {label: 'Domestic', value: 'Domestic'},
    {label: 'Overseas', value: 'Overseas'},
  ];

  public travelDayTyp: Array<IOption> = [
    {label: 'Regional', value: 'Regional'},
    {label: 'Domestic', value: 'Domestic'},
    {label: 'Overseas', value: 'Overseas'},
  ];

  public currency: Array<IOption> = [
    {label: 'EUR', value: 'EUR'},
    {label: 'TL', value: 'TL'},
  ];

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.tableResized();
  }

  onYearClick(Year: string) {
    this.filterYear = Year;
  }

  tableResized() {
    const ps = new PerfectScrollbar('#travelYearScrollbar');
    document.getElementById('travelYearScrollbar').style.height = this.getYearScrollbarNewHeight();
    ps.update();
  }

  getYearScrollbarNewHeight(): string {
    const table = document.getElementById('slaTravelTable');
    const tableHeight = table.offsetHeight;
    const yearHeaderHeight = document.getElementById('travelYearHeader').offsetHeight;
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
