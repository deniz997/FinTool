import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actual-sla-volume',
  templateUrl: './actual-sla-volume.component.html',
  styleUrls: ['./actual-sla-volume.component.css']
})
export class ActualSlaVolumeComponent implements OnInit {

  constructor() { }

  rightTableHeaders = [
    'SLA No',
    'SLA Name',
    'Template Name',
    'Service Department',
    'SLA Start Date',
    'SLA End Date',
    'Manday Input',
    'Manday Cost',
    'Regional Travel Flight',
    'Regional Travel Day',
    'Long Distance Travel Flight',
    'Long Distance Travel Day',
    'Domestic Travel Flight',
    'Domestic Travel Day',
    'Travel Expense',
    'Fix Costs',
    'SLA Volume',
    'SLA Consumption',
    'SLA Consumption in %',
  ];


  rightTableData = [
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
    ['SLA20_ITTQT_008', 'Mercedes Me Connect Aftersales Rollout 5', 'MeConnectA', 'RO', '01.01.2020', '31.12.2020', '2.420', '617.100', '185', '740', '9', '46', '-', '-', '194', '70.000', '946.002', '251.554', '30%'],
  ];

  currentPage: number = 1;
  totalItems: number = 60;
  itemPerPage: number = 5;
  maxSize: number = 7;

  ngOnInit(): void {

  }

}
