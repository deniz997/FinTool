import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {IOption} from 'ng-select';
import PerfectScrollbar from "perfect-scrollbar";

@Component({
  selector: 'app-sla-ticket',
  templateUrl: './sla-ticket.component.html',
  styleUrls: ['./sla-ticket.component.css']
})
export class SlaTicketComponent implements OnInit {

  private data = [];

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.data = [
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/10/01',
        TicketTyp: 'Gold',
        TicketRate: '1500'
      },
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/12/01',
        TicketTyp: 'Silver',
        TicketRate: '1500'
      },
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  //Years for Scroll
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

  tableSubHeaders = [
    'Year',
    'Valid From',
    'Valid To',
    'Ticket Typ',
    'Ticket Rate',
  ];

  selectedRow: string;
  setClickedRow: Function;
  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  showAdd = false;
  showUpdate = false;

  totalItems: number = 60;
  currentPage: number   = 1;
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
  public ticketTyp: Array<IOption> = [
    {label: 'Silver', value: 'Silver'},
    {label: 'Gold', value: 'Gold'},
    {label: 'Platinium', value: 'Platinium'},
  ];

  ngOnInit(): void {
  }

  onYearClick(Year: string){
    this.filterYear = Year;
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
