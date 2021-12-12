import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridsterDashboardComponent } from './gridster-dashboard.component';

const routes: Routes = [{ path: '', component: GridsterDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridsterDashboardRoutingModule { }
