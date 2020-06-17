import {Component, Inject, OnInit} from '@angular/core';
import {Observable, timer} from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
}
