import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-department-travel-rate',
  templateUrl: './department-travel-rate.component.html',
  styleUrls: ['./department-travel-rate.component.css']
})
export class DepartmentTravelRateComponent implements OnInit {

  years: number[];
  saved: boolean = true;
  rate: number;

  constructor() {}

  ngOnInit(): void {
    this.years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];


  }

  onSave() {
    this.saved = true;
  }

}
