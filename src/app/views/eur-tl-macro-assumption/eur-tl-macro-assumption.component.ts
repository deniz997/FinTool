import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-eur-tl-macro-assumption',
  templateUrl: './eur-tl-macro-assumption.component.html',
  styleUrls: ['./eur-tl-macro-assumption.component.css']
})
export class EurTlMacroAssumptionComponent implements OnInit {


  selectedRow: string;
  setClickedRow: Function;
  data: [{ Year: string; PlanningP: string; Rate: number; }, { Year: string, PlanningP: string; Rate: number; }];

  selectedRowNumber: number;
  validSelectedRowNumber: boolean = false;

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  constructor() {
    this.data = [
      {
        Year: '2020',
        PlanningP : 'EA1',
        Rate : 6.75
      },
      {
        Year: '2019',
        PlanningP : 'EA2',
        Rate : 7.50
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }

  RightTableHeaders = [
    'Year',
    'Planning Period',
    'Euro/TL Rate'
  ];

  public year: Array<IOption> = [
    {label: '2022', value: '2022'},
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'},
    {label: '2016', value: '2016'},
    {label: '2015', value: '2015'},
  ];

  public PlanningPeriods: Array<IOption> = [
    {label: 'EA1', value: 'Item1'},
    {label: 'EA2', value: 'Item2'},
  ];

  public ExchangeRate: Array<IOption> = [
    {label: 'Euro', value: 'EUR'},
    {label: 'TL', value: 'TL'},
  ];

  ngOnInit(): void {
  }

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }


  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.data.length || this.selectedRowNumber < 0);
  }

  SetSelectedRow(): void{
    this.selectedRowNumber = null
  }
}
