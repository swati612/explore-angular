import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public cardList = [
   { title: 'Card 1', cols: 2, rows: 1 , color: 'Tomato' },
   { title: 'Card 2', cols: 1, rows: 1 , color: 'Orange' },
 
   ];

  //  public widgets=[ 
  //    { title: 'Projects',  color: 'Tomato',widgetType:'projects' },
  //  { title: 'Notifications' , color: 'Orange' ,widgetType:'notifications'},
  //  { title: 'MyConnection',  color: 'Yellow',widgetType:'myconnection' },
  //  { title: 'MAIL' , color: 'Yellow' ,widgetType:'myconnection'},
  //  { title: 'Projects',  color: 'Yellow',widgetType:'myconnection' },
  //  { title: 'Projects',  color: 'green',widgetType:'projects' },
  //  { title: 'Notifications' , color: 'Orange' ,widgetType:'notifications'},
  //  { title: 'MyConnection',  color: 'gray',widgetType:'myconnection' },
  //  { title: 'MyConnection',  color: 'pink',widgetType:'myconnection' },
  //  { title: 'MAIL' , color: 'blue' ,widgetType:'myconnection'},
  //  { title: 'Projects',  color: 'red',widgetType:'myconnection' },
  //  { title: 'Projects',  color: 'indigo',widgetType:'projects' },
  // ]
  public widgets=[ 
  { title: 'Work Cards',  widgetType:'workcard' },
  { title: 'Notifications'  ,widgetType:'notifications'},
  { title: 'MYCONNECTION',  widgetType:'myconnection' },
  { title: 'MAIL' , widgetType:'myconnection'},
  { title: 'SCHEDULE',  widgetType:'myconnection' },
  { title: 'Sunny',  widgetType:'sunny' },
 ]
 
   drop(event: CdkDragDrop<string[]>) {
     console.log(event)
     moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
   }
 

   ngOnInit() :void{

  }

}
