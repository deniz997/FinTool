import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-sla-reference',
  templateUrl: './sla-reference.component.html',
  styleUrls: ['./sla-reference.component.css']
})
export class SlaReferenceComponent implements OnInit {

  constructor() { }

  public SLA: Array<IOption> = [
    {label: 'SLA 1', value: '1'},
    {label: 'SLA 2', value: '2'},
    {label: 'SLA 3', value: '3'},
    {label: 'SLA 4', value: '4'},
  ];

  ngOnInit(): void {
  }

}
