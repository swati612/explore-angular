import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsterDashboardRoutingModule } from './gridster-dashboard-routing.module';
import { GridsterDashboardComponent } from './gridster-dashboard.component';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [
    GridsterDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    GridsterDashboardRoutingModule,
    GridsterModule,
  ]
})
export class GridsterDashboardModule { }
