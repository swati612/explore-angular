import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'widget-details', loadChildren: () => import('./widget-details/widget-details.module').then(m => m.WidgetDetailsModule) },
 { path: 'gridster-dashboard', loadChildren: () => import('./gridster-dashboard/gridster-dashboard.module').then(m => m.GridsterDashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
