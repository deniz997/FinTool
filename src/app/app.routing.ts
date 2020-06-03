import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';


import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DialogFieldComponent} from './views/dialog-field/dialog-field.component';
import {UserParameterComponent} from './views/user-parameter/user-parameter.component';
import {CostCenterParameterComponent} from './views/cost-center-parameter/cost-center-parameter.component';
import {SlaItemParameterComponent} from './views/sla-item-parameter/sla-item-parameter.component';
import {PgkCostsParameterComponent} from './views/pgk-costs-parameter/pgk-costs-parameter.component';
import {ExternalCostsParameterComponent} from './views/external-costs-parameter/external-costs-parameter.component';
import {EurTlMacroAssumptionComponent} from './views/eur-tl-macro-assumption/eur-tl-macro-assumption.component';
import {DepartmentTravelRateComponent} from './views/department-travel-rate/department-travel-rate.component';
import {InternalHeadcountComponent} from './views/internal-headcount/internal-headcount.component';
import {ExternalHeadcountComponent} from './views/external-headcount/external-headcount.component';
import {E4RelatedCostsComponent} from './views/e4-related-costs/e4-related-costs.component';
import {ActualSlaVolumeComponent} from './views/actual-sla-volume/actual-sla-volume.component';
import {OpportunitiesSlaVolumeComponent} from './views/opportunities-sla-volume/opportunities-sla-volume.component';
import {SlaReferenceComponent} from './views/sla-reference/sla-reference.component';
import {CostCenterComponent} from './views/tables/cost-center/cost-center.component';
import {CurrencyComponent} from './views/tables/currency/currency.component';
import {MandayComponent} from './views/tables/manday/manday.component';
import {PgkTableComponent} from './views/tables/pgk-table/pgk-table.component';
import {PlanningComponent} from './views/tables/planning/planning.component';
import {StatusComponent} from './views/tables/status/status.component';
import {TravelTableComponent} from './views/tables/travel-table/travel-table.component';
import {TicketComponent} from './views/tables/ticket/ticket.component';
import {RateTableComponent} from './views/tables/rate-table/rate-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'parameter/dialog',
        component: DialogFieldComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/dialog/tables/cost-center',
        component: CostCenterComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/travel-table',
        component: TravelTableComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/ticket',
        component: TicketComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/currency',
        component: CurrencyComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/manday',
        component: MandayComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/pgk-table',
        component: PgkTableComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/planning',
        component: PlanningComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/dialog/tables/rate-table',
        component: RateTableComponent,
        data: {
          title: 'Rate-Table'
        },
      },
      {
        path: 'parameter/dialog/tables/status',
        component: StatusComponent,
        data: {
          title: 'Dialog-Field'
        },
      },
      {
        path: 'parameter/user',
        component: UserParameterComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/cost-center',
        component: CostCenterParameterComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/sla-item',
        component: SlaItemParameterComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/sla-reference',
        component: SlaReferenceComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/pgk-costs-per-person',
        component: PgkCostsParameterComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/external-costs-per-person',
        component: ExternalCostsParameterComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/eur-tl-macro-assumption',
        component: EurTlMacroAssumptionComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/department-travel-rate',
        component: DepartmentTravelRateComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'parameter/sla-reference',
        component: SlaReferenceComponent,
        data: {
          title: 'Parameter'
        },
      },
      {
        path: 'cost/int-headcount',
        component: InternalHeadcountComponent,
        data: {
          title: 'Cost'
        },
      },
      {
        path: 'cost/ext-headcount',
        component: ExternalHeadcountComponent,
        data: {
          title: 'Cost'
        },
      },
      {
        path: 'cost/e4-related',
        component: E4RelatedCostsComponent,
        data: {
          title: 'Cost'
        },
      },
      {
        path: 'revenue/actual-sla-vol',
        component: ActualSlaVolumeComponent,
        data: {
          title: 'Revenue'
        },
      },
      {
        path: 'revenue/opportunities-sla-vol',
        component: OpportunitiesSlaVolumeComponent,
        data: {
          title: 'Revenue'
        },
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
