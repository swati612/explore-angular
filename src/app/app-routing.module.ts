import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridsterDashboardComponent } from './gridster-dashboard/gridster-dashboard.component';

const routes: Routes = [
 {path:'',component:GridsterDashboardComponent},
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'widget-details', loadChildren: () => import('./widget-details/widget-details.module').then(m => m.WidgetDetailsModule) },
 { path: 'gridster-dashboard', loadChildren: () => import('./gridster-dashboard/gridster-dashboard.module').then(m => m.GridsterDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
