import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

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
import {SelectModule} from 'ng-select';

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
    DepartmentTravelRateComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
