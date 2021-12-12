import { Component, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-gridster-dashboard',
  templateUrl: './gridster-dashboard.component.html',
  styleUrls: ['./gridster-dashboard.component.scss']
})
export class GridsterDashboardComponent implements OnInit {

  options: GridsterConfig = {
    gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: false
    },
    
    disableWindowResize: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: {north: true, east: true, south: true, west: true},
    pushResizeItems: false,
    displayGrid: DisplayGrid.OnDragAndResize,
    disableWarnings: false,
    scrollToNewItems: false,
    useTransformPositioning: true,
    maxCols: 4,
    minCols:4,
    margin: 16
  };
  dashboard = [  
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    
  ];

  public widgets=[ 
    { title: 'Work Cards',  widgetType:'workcard' },
    { title: 'Notifications'  ,widgetType:'notifications'},
    { title: 'MYCONNECTION',  widgetType:'myconnection' },
    { title: 'MAIL' , widgetType:'myconnection'},
    { title: 'SCHEDULE',  widgetType:'myconnection' },
    { title: 'Work Cards',  widgetType:'workcard' },
    { title: 'Notifications'  ,widgetType:'notifications'},
    { title: 'MYCONNECTION',  widgetType:'myconnection' },
    { title: 'MAIL' , widgetType:'myconnection'},
    { title: 'SCHEDULE',  widgetType:'myconnection' },
    { title: 'Sunny',  widgetType:'sunny' },
   ]

  constructor() { }

  ngOnInit(): void {
  }
  

}
