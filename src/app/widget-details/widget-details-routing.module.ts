import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetDetailsComponent } from './widget-details.component';

const routes: Routes = [{ path: '', component: WidgetDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetDetailsRoutingModule { }
