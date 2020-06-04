import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sla-item-parameter',
  templateUrl: './sla-item-parameter.component.html',
  styleUrls: ['./sla-item-parameter.component.css']
})
export class SlaItemParameterComponent implements OnInit {
  private data = [];
  private setClickedRow: (index) => void;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    this.data = [
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/10/01',
        MandayTyp: 'Manday Typ 1',
        MandayRate: 'Manday Rate 1',
        TravelTyp: 'Travel Typ 1',
        TravelDayTyp: 'Travel Day Typ 1',
        TravelRate: 'Travel Rate 2',
        TicketTyp: 'Ticket Typ 2',
        TicketRate: 'Ticket Rate 2',
        FixCostsTyp: 'Fix Costs Typ 1',
        FixCostsRate: 'Fix Costs Rate 2'
      },
      {
        Year: '2020',
        ValidFrom: '2020/01/01',
        ValidTo: '2020/12/01',
        MandayTyp: 'Manday Typ 2',
        MandayRate: 'Manday Rate 2',
        TravelTyp: 'Travel Typ 2',
        TravelDayTyp: 'Travel Day Typ 2',
        TravelRate: 'Travel Rate 1',
        TicketTyp: 'Ticket Typ 1',
        TicketRate: 'Ticket Rate 1',
        FixCostsTyp: 'Fix Costs Typ 2',
        FixCostsRate: 'Fix Costs Rate 1'
      },
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  selectedRow: Function;

  tableSubHeaders = [
    'Year',
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

  showAdd = false;
  showUpdate = false;

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

  public mandayTyp: Array<IOption> = [
    {label: 'Manday Typ 1', value: 'MandayTyp1'},
    {label: 'Manday Typ 2', value: 'MandayTyp2'},
  ];

  public mandayRate: Array<IOption> = [
    {label: 'Manday Rate 1', value: 'MandayRate1'},
    {label: 'Manday Rate 2', value: 'MandayRate2'},
  ];

  public travelTyp: Array<IOption> = [
    {label: 'Travel Typ 1', value: 'TravelTyp1'},
    {label: 'Travel Typ 2', value: 'TravelTyp2'},
  ];

  public travelDayTyp: Array<IOption> = [
    {label: 'Travel Day Typ 1', value: 'TravelDayTyp1'},
    {label: 'Travel Day Typ 2', value: 'TravelDayTyp2'},
  ];

  public travelRate: Array<IOption> = [
    {label: 'Travel Rate 1', value: 'TravelRate1'},
    {label: 'Travel Rate 2', value: 'TravelRate2'},
  ];

  public ticketTyp: Array<IOption> = [
    {label: 'Ticket Typ 1', value: 'TicketTyp1'},
    {label: 'Ticket Typ 2', value: 'TicketTyp2'},
  ];

  public ticketRate: Array<IOption> = [
    {label: 'Ticket Rate 1', value: 'TicketRate1'},
    {label: 'Ticket Rate 2', value: 'TicketRate2'},
  ];

  public fixCostsTyp: Array<IOption> = [
    {label: 'Fix Costs Typ 1', value: 'FixCostsTyp1'},
    {label: 'Fix Costs Typ 2', value: 'FixCostsTyp2'},
  ];

  public fixCostsRate: Array<IOption> = [
    {label: 'Fix Costs Rate 1', value: 'FixCostsRate1'},
    {label: 'Fix Costs Rate 2', value: 'FixCostsRate2'},
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
}
