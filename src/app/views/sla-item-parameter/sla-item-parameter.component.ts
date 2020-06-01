import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sla-item-parameter',
  templateUrl: './sla-item-parameter.component.html',
  styleUrls: ['./sla-item-parameter.component.css']
})
export class SlaItemParameterComponent implements OnInit {

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  rightTableFirstCellHeader = 'Year';
  rightTableFirstCellSubHeader = 'Year';

  rightTableHeaders = [
    'Manday',
    'Travel',
    'Ticket',
    'Fix Costs',
  ];

  rightTableSubHeaders = [
    'Valid From',
    'Valid To',
    'Manday Typ',
    'Manday Rate',
    'Travel Typ',
    'Travel Day Typ',
    'Travel Rate',
    'Ticket Typ',
    'Ticket Rate',
    'Fix Costs Typ',
    'Fix Costs Rate',
  ];

  rightTableData = [
    ['0000', '00/00/00', '00/00/00', 'Manday Typ 1', 'Manday Rate 1', 'Travel Typ 1', 'Travel Date Typ 1', 'Travel Rate 1', 'Ticket Typ 1', 'Ticket Rate 1', 'Fix Costs Typ 1', 'Fix Costs Rate 1', ],
    ['0000', '00/00/00', '00/00/00', 'Manday Typ 2', 'Manday Rate 2', 'Travel Typ 2', 'Travel Date Typ 2', 'Travel Rate 2', 'Ticket Typ 2', 'Ticket Rate 2', 'Fix Costs Typ 2', 'Fix Costs Rate 2', ],
  ];

  show = false;

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  // Datepicker
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  ngOnInit(): void {
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

  ShowHide = (): void => {
    this.show = !this.show;
  }
}
