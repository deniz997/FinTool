import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DialogFieldComponent } from './views/dialog-field/dialog-field.component';
import { UserParameterComponent } from './views/user-parameter/user-parameter.component';
import { CostCenterParameterComponent } from './views/cost-center-parameter/cost-center-parameter.component';
import { SlaItemParameterComponent } from './views/sla-item-parameter/sla-item-parameter.component';
import { PgkCostsParameterComponent } from './views/pgk-costs-parameter/pgk-costs-parameter.component';
import { ExternalCostsParameterComponent } from './views/external-costs-parameter/external-costs-parameter.component';
import { EurTlMacroAssumptionComponent } from './views/eur-tl-macro-assumption/eur-tl-macro-assumption.component';
import { SlaReferenceComponent } from './views/sla-reference/sla-reference.component';
import { InternalHeadcountComponent } from './views/internal-headcount/internal-headcount.component';
import { ExternalHeadcountComponent } from './views/external-headcount/external-headcount.component';
import { E4RelatedCostsComponent } from './views/e4-related-costs/e4-related-costs.component';
import { ActualSlaVolumeComponent } from './views/actual-sla-volume/actual-sla-volume.component';
import { OpportunitiesSlaVolumeComponent } from './views/opportunities-sla-volume/opportunities-sla-volume.component';
import { DepartmentTravelRateComponent } from './views/department-travel-rate/department-travel-rate.component';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';

import {MandayComponent} from './views/tables/manday/manday.component';
import {CostCenterComponent} from './views/tables/cost-center/cost-center.component';
import {CurrencyComponent} from './views/tables/currency/currency.component';
import {StatusComponent} from './views/tables/status/status.component';
import {PgkTableComponent} from './views/tables/pgk-table/pgk-table.component';
import {PlanningComponent} from './views/tables/planning/planning.component';
import {TravelTableComponent} from './views/tables/travel-table/travel-table.component';
import {TicketComponent} from './views/tables/ticket/ticket.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RateTableComponent} from './views/tables/rate-table/rate-table.component';
import {SelectModule} from 'ng-select';
import {TravelDayTypComponent} from './views/tables/travel-day-typ/travel-day-typ.component';
import {MandayRateComponent} from './views/tables/manday-rate/manday-rate.component';
import {TicketRateComponent} from './views/tables/ticket-rate/ticket-rate.component';
import {FixCostsComponent} from './views/tables/fix-costs/fix-costs.component';
import {FixCostRateComponent} from './views/tables/fix-cost-rate/fix-cost-rate.component';
import {ParametersComponent} from './views/parameters/parameters.component';
import {RateComponent} from './views/rates/rate.component';
import { SlaMandayComponent } from './views/sla-item-parameter-tables/sla-manday/sla-manday.component';
import { SlaTravelComponent } from './views/sla-item-parameter-tables/sla-travel/sla-travel.component';
import { SlaTicketComponent } from './views/sla-item-parameter-tables/sla-ticket/sla-ticket.component';
import { SlaFixCostsComponent } from './views/sla-item-parameter-tables/sla-fix-costs/sla-fix-costs.component';
import { ManagementTravelsComponent } from './views/e4-related-costs/management-travels/management-travels.component';
import { ExternalBenchComponent } from './views/e4-related-costs/external-bench/external-bench.component';
import { ToolComponent } from './views/e4-related-costs/tool/tool.component';
import { NonChargeableConsultancyComponent } from './views/e4-related-costs/non-chargeable-consultancy/non-chargeable-consultancy.component';
import { InternalProjectComponent } from './views/e4-related-costs/internal-project/internal-project.component';
import {ExternalCostDefinitionComponent} from './views/tables/external-cost-definition/external-cost-definition.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    SelectModule,
    PaginationModule.forRoot(),
    FormsModule,
    BsDatepickerModule,
    NgbModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    DashboardComponent,
    DialogFieldComponent,
    UserParameterComponent,
    CostCenterParameterComponent,
    SlaItemParameterComponent,
    PgkCostsParameterComponent,
    ExternalCostsParameterComponent,
    EurTlMacroAssumptionComponent,
    SlaReferenceComponent,
    InternalHeadcountComponent,
    ExternalHeadcountComponent,
    E4RelatedCostsComponent,
    ActualSlaVolumeComponent,
    OpportunitiesSlaVolumeComponent,
    DepartmentTravelRateComponent,
    MandayComponent,
    CostCenterComponent,
    CurrencyComponent,
    StatusComponent,
    PgkTableComponent,
    PlanningComponent,
    TravelTableComponent,
    TicketComponent,
    RateTableComponent,
    TravelDayTypComponent,
    MandayRateComponent,
    TicketRateComponent,
    FixCostsComponent,
    FixCostRateComponent,
    ParametersComponent,
    RateComponent,
    FixCostRateComponent,
    TravelDayTypComponent,
    SlaMandayComponent,
    SlaTravelComponent,
    SlaTicketComponent,
    SlaFixCostsComponent,
    ManagementTravelsComponent,
    ExternalBenchComponent,
    ToolComponent,
    NonChargeableConsultancyComponent,
    InternalProjectComponent,
    TravelDayTypComponent,
    MandayRateComponent,
    TicketRateComponent,
    FixCostsComponent,
    FixCostRateComponent,
    ParametersComponent,
    RateComponent,
    ExternalCostDefinitionComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
