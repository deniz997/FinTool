import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-external-cost-definition',
  templateUrl: './external-cost-definition.component.html',
  styleUrls: ['./external-cost-definition.component.css']
})
export class ExternalCostDefinitionComponent implements OnInit {
  selectedRow: Number;
  setClickedRow: Function;
  data: [{ externalcosttable: string; }, { externalcosttable: string; }, { externalcosttable: string; }];

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 3;
  private selectedRowNumber: number;

  constructor() {
    this.data = [
      {
        externalcosttable : 'Definiton 1'
      },
      {
        externalcosttable : 'Definition 2'
      },
      {
        externalcosttable : 'Definition 3'
      }
    ];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    };
  }
  RightTableHeaders = [
    'External Cost Definition'
  ];

  public ExternalCostDefinition: Array<IOption> = [
    {label: 'Definiton 1', value: 'Item1'},
    {label: 'Definiton 2', value: 'Item2'},
    {label: 'Definiton 3', value: 'Item3'}
  ];


  validSelectedRowNumber: boolean = false;

  ngOnInit(): void {
  }

  onTableRowClick(i: number) {
    this.saveClickedRow(i);
  }

  saveClickedRow(i: number) {
    this.selectedRowNumber = i;
    this.updateValidSelectedRowNumber();
  }

  updateValidSelectedRowNumber() {
    this.validSelectedRowNumber = !(this.selectedRowNumber >= this.data.length || this.selectedRowNumber < 0);
  }

  ShowHideAdd(): void {
    this.showAdd = !this.showAdd;
  }
  ShowHideUpdate(): void {
    this.showUpdate = !this.showUpdate;
  }
  SetSelectedRow(): void {
    this.selectedRowNumber = null;
  }

}
