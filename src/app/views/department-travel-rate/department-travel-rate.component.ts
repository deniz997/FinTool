import { Component, OnInit } from '@angular/core';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-department-travel-rate',
  templateUrl: './department-travel-rate.component.html',
  styleUrls: ['./department-travel-rate.component.css']
})
export class DepartmentTravelRateComponent implements OnInit {

  rate: number;
  items: any[];
  headers = ['Year', 'Valid From', 'Valid To', 'Rate'];
  private selectedRow: number = -1;
  newDTR: DTR = new DTR();
  showField = false;
  ngbValidTo: NgbDate;
  ngbValidFrom: NgbDate;

  showAdd = false;
  showUpdate = false;
  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {id: 0, year: 2018, validFrom: new Date('2018-01-01'), validTo: new Date('2018-12-31'), rate: 5.17},
      {id: 1, year: 2019, validFrom: new Date('2019-01-01'), validTo: new Date('2019-12-31'), rate: 5.87},
      {id: 2, year: 2020, validFrom: new Date('2020-01-01'), validTo: new Date('2020-06-25'), rate: 7.17},
      {id: 3, year: 2020, validFrom: new Date('2020-06-26'), validTo: new Date('2020-12-31'), rate: 6.95},
    ];

  }

  setClickedRow(index) {
    this.selectedRow = index;
  }


  addNewDTR() {
    this.newDTR = new DTR();
    this.ngbValidFrom = null;
    this.ngbValidTo = null;
    this.showField = true;

  }

  updateDTR() {
    this.newDTR = this.items[this.selectedRow];
    const from = this.newDTR.validFrom;
    const to = this.newDTR.validTo;
    this.ngbValidFrom = new NgbDate(from.getFullYear(),  from.getMonth() + 1, from.getDate());
    this.ngbValidTo = new NgbDate(to.getFullYear(),  to.getMonth() + 1, to.getDate());
    this.showField = true;

  }

  save() {
    /*
    this.newDTR.validFrom = new Date(this.ngbValidFrom.year, this.ngbValidFrom.month-1, this.ngbValidFrom.day);
    this.newDTR.validTo = new Date(this.ngbValidTo.year, this.ngbValidTo.month-1, this.ngbValidTo.day);



    let indexPut = -1;
    if (this.newDTR.id != null) {
      this.items = this.items.filter(((value, index) => {
        if (value.id !== this.newDTR.id) {
          return true;
        } else {
          indexPut = index;
          return false;
        }
      }));
    }

    if (indexPut !== -1) {
      this.items.splice(indexPut, 0, this.newDTR);
    } else {
      const last = this.items[this.items.length - 1];
      this.newDTR.id = last.id;
      this.items.push(this.newDTR);
    }
     */
    this.showField = false;
  }

  deleteDTR() {
    if (this.selectedRow === -1) {
      return;
    }
    this.items.splice(this.selectedRow, 1);
  }

}

class DTR {
  id: number;
  year: string;
  validFrom: Date;
  validTo: Date;
  rate: number;

  constructor() {
  }
}
