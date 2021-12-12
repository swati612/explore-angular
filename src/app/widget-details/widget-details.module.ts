import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetDetailsRoutingModule } from './widget-details-routing.module';
import { WidgetDetailsComponent } from './widget-details.component';


@NgModule({
  declarations: [
    WidgetDetailsComponent
  ],
  imports: [
    CommonModule,
    WidgetDetailsRoutingModule
  ]
})
export class WidgetDetailsModule { }
