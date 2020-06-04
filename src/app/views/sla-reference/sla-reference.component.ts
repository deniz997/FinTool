import { Component, OnInit } from '@angular/core';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-sla-reference',
  templateUrl: './sla-reference.component.html',
  styleUrls: ['./sla-reference.component.css']
})
export class SlaReferenceComponent implements OnInit {

  constructor() { }
  selectedLevel;
  public SLA: Array<IOption> = [
    {label: 'SLA20_ITTQT_008', value: 'Mercedes Me Connect Aftersales Rollout 5'},
    {label: 'SLA20_ITTQT_009', value: 'Mercedes Me Connect 2'},
    {label: 'SLA20_ITTQT_009', value: 'Mercedes Me Connect 1'},
    {label: 'SLA20_ITTQT_106', value: 'Cyber Security Lighthouse Program'},
    {label: 'SLA20_ITTQT_113', value: 'EPA Coordination'},
  ];

  selected() {
    console.log(this.selectedLevel);
  }

  ngOnInit(): void {
  }

}
