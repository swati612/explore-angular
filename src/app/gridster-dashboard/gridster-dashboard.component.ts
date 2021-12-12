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
    maxCols: 8,
    minCols:6,
    margin: 10
  };
  dashboard = [  
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    {cols: 1, rows: 1, y: 0, x: 0},
    
  ];

  public widgets :any=[ 
    // { title: 'Work Cards',  widgetType:'workcard' },
    // { title: 'Notifications'  ,widgetType:'notifications'},
    // { title: 'MYCONNECTION',  widgetType:'myconnection' },
    // { title: 'MAIL' , widgetType:'myconnection'},
    // { title: 'SCHEDULE',  widgetType:'myconnection' },
    // { title: 'Work Cards',  widgetType:'workcard' },
    // { title: 'Notifications'  ,widgetType:'notifications'},
    // { title: 'MYCONNECTION',  widgetType:'myconnection' },
    // { title: 'MAIL' , widgetType:'myconnection'},
    // { title: 'SCHEDULE',  widgetType:'myconnection' },
    // { title: 'Sunny',  widgetType:'sunny' },
   ]

  constructor() { }

  ngOnInit(): void {
    this.widgets = this.data(); 
    console.log(this.widgets)
  }
  
  data(){
    let  arr = [
      {
          "classes": "widget-one-by-two",
          "data": {
              "summary": {
                  "totalVariance": 100000,
                  "totalVariancePercent": 40
              },
              "columns": [
                  {
                      "name": "DC",
                      "key": "dc",
                      "type": "name",
                      "width": "60%",
                      "align": "left"
                  },
                  {
                      "name": "Products",
                      "key": "product",
                      "type": "number",
                      "width": "20%",
                      "align": "right"
                  },
                  {
                      "name": "Variance",
                      "key": "variance",
                      "type": "amount",
                      "width": "20%",
                      "align": "right"
                  }
              ],
              "icon": "building",
              "bgColor": "#E25241",
              "showContentHeader": true,
              "preferences": {
                  "showImageSeries": true
              },
              "rows": [
                  {
                      "dc": "Location name 1",
                      "product": 100000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 2",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 3",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 4",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 5",
                      "product": 10000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 6",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 7",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 8",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 9",
                      "product": 1000,
                      "variance": 30
                  },
                  {
                      "dc": "Location name 10",
                      "product": 1000,
                      "variance": 30
                  }
              ]
          },
          "header": "Contract Price Variance: MAY ‘21",
          "key": "contract price variance",
          "name": "Contract Price Variance: MAY ‘21",
          "order": 1,
          "type": "contracted-price-variance",
          "hideMoreButton": false,
          "content": 0,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "chartData": [
                  {
                      "category": "Non Contracted",
                      "value": 40,
                      "color": "#DB4CB2",
                      "price": "$2,000,000.00"
                  },
                  {
                      "category": "Contracted",
                      "value": 60,
                      "color": "#1AC9E6",
                      "price": "$4,000,000.00"
                  }
              ],
              "contractedPrice": "4M",
              "contractedProducts": "37",
              "nonContractedPrice": "2M",
              "nonContractedProducts": "20",
              "bottomTextFontWeight": "normal",
              "innerRadius": 65,
              "centerValue": "9320902702",
              "centerLabel": "≤0 Products",
              "isForSpend": true,
              "title": "Prior 12 Month’s SPend",
              "headerLabel1": "Contracted",
              "headerLabel2": "Non Contracted"
          },
          "header": "Contracted vs Non Contracted",
          "key": "contracted_vs_non_contracted",
          "name": "Contracted vs Non Contracted",
          "order": 1,
          "type": "contracted-vs-non-contracted",
          "content": 1,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-two-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Owner",
                      "key": "",
                      "type": "owner",
                      "width": "40px",
                      "class": "center"
                  },
                  {
                      "name": "Invoice/Total",
                      "key": "",
                      "type": "invoice"
                  },
                  {
                      "name": "Payment Due",
                      "key": "",
                      "type": "due",
                      "class": "center",
                      "width": "96px"
                  },
                  {
                      "name": "Discount Date",
                      "key": "",
                      "type": "discount",
                      "class": "center",
                      "width": "96px"
                  },
                  {
                      "name": "Savings Potential",
                      "key": "",
                      "type": "savings",
                      "class": "center",
                      "width": "96px"
                  }
              ],
              "rows": [
                  {
                      "owner": {
                          "name": "John Smith",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "J",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": null
                  },
                  {
                      "owner": {
                          "name": "Dr Smith",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "D",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "11/30/2020",
                      "discountDate": "11/15/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 377,
                      "discountDaysLeft": 392
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "11/30/1920",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 36902,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  },
                  {
                      "owner": {
                          "name": "Sample Name",
                          "profileImage": null
                      },
                      "invoiceNumber": "INV10000233201",
                      "invoiceTotal": 1000321,
                      "dueDate": "01/13/2021",
                      "discountDate": "12/21/2020",
                      "savingsAmount": 20004.62,
                      "discountPercent": 2,
                      "initials": "S",
                      "dueDaysLeft": 333,
                      "discountDaysLeft": 356
                  }
              ],
              "subheader": "Test Widget",
              "isRowClickable": false
          },
          "header": "Net Term Expirations",
          "type": "net-term",
          "content": 2,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-two-by-two",
          "data": {
              "rows": [
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/10/20",
                              "dropCity": "Walnut Creek",
                              "dropState": "CA",
                              "dropDate": "10/11/20",
                              "isDropship": false,
                              "isXDock": true,
                              "isInTransit": false,
                              "isCompleted": true,
                              "isLate": true
                          },
                          {
                              "pickupCity": "Walnut Creek",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": true
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/10/20",
                              "dropCity": "Walnut Creek",
                              "dropState": "CA",
                              "dropDate": "10/11/20",
                              "isDropship": false,
                              "isXDock": true,
                              "isInTransit": false,
                              "isCompleted": true,
                              "isLate": true
                          },
                          {
                              "pickupCity": "Walnut Creek",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": true,
                              "isCompleted": false,
                              "isLate": true
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": true,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": true,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/10/20",
                              "dropCity": "Walnut Creek",
                              "dropState": "CA",
                              "dropDate": "10/11/20",
                              "isDropship": false,
                              "isXDock": true,
                              "isInTransit": true,
                              "isCompleted": false,
                              "isLate": false
                          },
                          {
                              "pickupCity": "Walnut Creek",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": true,
                              "isCompleted": false,
                              "isLate": true
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": true,
                              "isLate": true
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  },
                  {
                      "name": "PO 100189956005",
                      "count": 120,
                      "trackingStates": [
                          {
                              "pickupCity": "Salinas",
                              "pickupState": "CA",
                              "pickupDate": "10/11/20",
                              "dropCity": "Dallas",
                              "dropState": "TX",
                              "dropDate": "10/12/20",
                              "isDropship": false,
                              "isXDock": false,
                              "isInTransit": false,
                              "isCompleted": false,
                              "isLate": false
                          }
                      ]
                  }
              ],
              "subheader": "Test Widget"
          },
          "header": "In Transit",
          "type": "in-transit",
          "content": 3,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Manufacturers",
                      "key": "name",
                      "type": "name",
                      "width": "58%",
                      "id": 1
                  },
                  {
                      "name": "Spend",
                      "key": "totalPurhase",
                      "type": "value",
                      "id": 2,
                      "align": "center",
                      "width": "20%"
                  },
                  {
                      "name": "PY%",
                      "key": "lastTotalPurhase",
                      "type": "pychange",
                      "id": 3,
                      "align": "center",
                      "width": "20%"
                  }
              ],
              "isForSpend": true,
              "menuOptions": {
                  "key": "toggle",
                  "text": "Total Cases"
              },
              "rows": [],
              "subheader": "Test Widget"
          },
          "header": "Top 10: MFR. by Spend",
          "key": "top_manufacturer",
          "name": "Top 10 Manufacturer",
          "order": 1,
          "type": "top-10",
          "content": 4,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Manufacturers",
                      "key": "name",
                      "type": "name",
                      "width": "58%",
                      "id": 1
                  },
                  {
                      "name": "Spend",
                      "key": "totalPurhase",
                      "type": "value",
                      "id": 2,
                      "align": "center",
                      "width": "20%"
                  },
                  {
                      "name": "PY%",
                      "key": "lastTotalPurhase",
                      "type": "pychange",
                      "id": 3,
                      "align": "center",
                      "width": "20%"
                  }
              ],
              "isForSpend": true,
              "menuOptions": {
                  "key": "toggle",
                  "text": "Total Cases"
              },
              "rows": [
                  {
                      "ranking": 1,
                      "name": "MONDELEZ INTERNATIONAL INC",
                      "totalPurhase": "716611.6299999999",
                      "lastTotalPurhase": -28.780119650000003
                  },
                  {
                      "ranking": 2,
                      "name": "GHIRARDELLI CHOCOLATE",
                      "totalPurhase": "646175.12",
                      "lastTotalPurhase": 30.772538579999996
                  },
                  {
                      "ranking": 3,
                      "name": "FLAVORS R SPECIALTY INC",
                      "totalPurhase": "183506.3500000000",
                      "lastTotalPurhase": -22.69722583
                  },
                  {
                      "ranking": 4,
                      "name": "CONCORD FOODS",
                      "totalPurhase": "161489.21",
                      "lastTotalPurhase": -38.73203643
                  },
                  {
                      "ranking": 5,
                      "name": "REDISTRIBUTOR REGENCY COFFEE",
                      "totalPurhase": "58560.5000000000",
                      "lastTotalPurhase": -11.24401156
                  },
                  {
                      "ranking": 6,
                      "name": "NAKED FOODS LTD",
                      "totalPurhase": "35400.12",
                      "lastTotalPurhase": -23.258311000000003
                  },
                  {
                      "ranking": 7,
                      "name": "LINEAGE LOGISTICS",
                      "totalPurhase": "29773.4900000000",
                      "lastTotalPurhase": -9.30765409
                  },
                  {
                      "ranking": 8,
                      "name": "LYNCH FOODS",
                      "totalPurhase": "13871.1500000000",
                      "lastTotalPurhase": -35.09018301
                  },
                  {
                      "ranking": 9,
                      "name": "GOLD COAST BAKING CO INC",
                      "totalPurhase": "0.0",
                      "lastTotalPurhase": 0
                  }
              ],
              "subheader": "Test Widget"
          },
          "header": "Top 10: Distribution Centers",
          "key": "top_dc",
          "name": "Top 10 Distribution Center",
          "order": 2,
          "type": "top-10",
          "content": 5,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Product",
                      "key": "name",
                      "type": "name",
                      "width": "56%"
                  },
                  {
                      "name": "On Order",
                      "key": "doo",
                      "type": "value",
                      "class": "center",
                      "width": "22%"
                  },
                  {
                      "name": "On Hand",
                      "key": "doh",
                      "type": "alert-value",
                      "class": "right",
                      "width": "22%"
                  }
              ],
              "rows": [
                  {
                      "name": "MONDELEZ INTERNATIONAL INC",
                      "image": "",
                      "doo": 0,
                      "doh": 7,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  },
                  {
                      "name": "GHIRARDELLI CHOCOLATE",
                      "doo": 0,
                      "doh": 3,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          },
                          {
                              "name": "Sample DC 1"
                          }
                      ]
                  },
                  {
                      "name": "FLAVORS R SPECIALTY INC",
                      "doo": 1,
                      "doh": 7,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  },
                  {
                      "name": "CONCORD FOODS",
                      "doo": 1,
                      "doh": 3,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  },
                  {
                      "name": "REDISTRIBUTOR REGENCY COFFEE",
                      "doo": 5,
                      "doh": 1,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  },
                  {
                      "name": "NAKED FOODS LTD",
                      "doo": 3,
                      "doh": 2,
                      "productNumber": 123
                  },
                  {
                      "name": "LINEAGE LOGISTICS",
                      "doo": 2,
                      "doh": 9,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  },
                  {
                      "name": "LYNCH FOODS",
                      "doo": 1,
                      "doh": 3,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  },
                  {
                      "name": "GOLD COAST BAKING CO INC",
                      "doo": 0,
                      "doh": 0,
                      "productNumber": 123,
                      "dcs": [
                          {
                              "name": "Sample DC"
                          }
                      ]
                  }
              ],
              "subheader": "Test Widget",
              "isRowClickable": true
          },
          "header": "Inventory Alerts: Products",
          "key": "inventory_alerts",
          "name": "Inventory Alerts: Products",
          "order": 2,
          "type": "inventory-alerts",
          "content": 6,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-two-by-two",
          "data": {
              "blockData": [
                  {
                      "bgColor": "#E3F2FD",
                      "bgOpacity": 40,
                      "color": "#2196F3",
                      "count": "NA",
                      "label": "Received at DC",
                      "bgColorVal": "rgba(227,242,253,0.4)"
                  },
                  {
                      "bgColor": "#FEF8E4",
                      "color": "#F6C244",
                      "count": 1000,
                      "label": "In Transit To DC",
                      "bgColorVal": "rgba(254,248,228,0.4)"
                  },
                  {
                      "bgColor": "#EBF5EA",
                      "color": "#67AC5C",
                      "count": 1000,
                      "label": "Received at Store",
                      "bgColorVal": "rgba(235,245,234,0.4)"
                  },
                  {
                      "bgColor": "#F3E5F5",
                      "color": "#673AB7",
                      "count": 1000,
                      "label": "In Transit To Store",
                      "bgColorVal": "rgba(243,229,245,0.4)"
                  }
              ],
              "chartData": [
                  {
                      "category": "Received At DC",
                      "value": "NA",
                      "color": "#90CAF9"
                  },
                  {
                      "category": "In Transit To DC",
                      "value": 1000,
                      "color": "#FBE08F"
                  },
                  {
                      "category": "Received at Store",
                      "value": 1000,
                      "color": "#AFD4AB"
                  },
                  {
                      "category": "In Transit To Store",
                      "value": 1000,
                      "color": "#CE93D8"
                  }
              ],
              "innerRadius": 60,
              "centerValue": 0,
              "centerLabel": "Total Cases"
          },
          "header": "Possible Affected Cases",
          "type": "donut-block",
          "content": 7,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-two-by-four half-header",
          "data": {
              "columns": [
                  {
                      "name": "FullName",
                      "key": "fullName",
                      "type": "fullName",
                      "width": "100%",
                      "id": 1
                  }
              ],
              "icon": "building",
              "bgColor": "#E25241",
              "showHeader": false,
              "preferences": {
                  "showImageSeries": true
              },
              "rows": [
                  {
                      "name": "Location name 1",
                      "city": "City 1",
                      "state": "CA",
                      "fullName": "Location name 1 - City 1, CA"
                  },
                  {
                      "name": "Location name 2",
                      "city": "City 2",
                      "state": "CA",
                      "fullName": "Location name 2 - City 2, CA"
                  },
                  {
                      "name": "Location name 3",
                      "city": "City 3",
                      "state": "AZ",
                      "fullName": "Location name 3 - City 3, AZ"
                  },
                  {
                      "name": "Location name 4",
                      "city": "City 4",
                      "state": "CA",
                      "fullName": "Location name 4 - City 4, CA"
                  },
                  {
                      "name": "Location name 5",
                      "city": "City 5",
                      "state": "AK",
                      "fullName": "Location name 5 - City 5, AK"
                  },
                  {
                      "name": "Location name 6",
                      "city": "City 6",
                      "state": "AK",
                      "fullName": "Location name 6 - City 6, AK"
                  },
                  {
                      "name": "Location name 7",
                      "city": "City 7",
                      "state": "AR",
                      "fullName": "Location name 7 - City 7, AR"
                  },
                  {
                      "name": "Location name 8",
                      "city": "City 8",
                      "state": "AR",
                      "fullName": "Location name 8 - City 8, AR"
                  },
                  {
                      "name": "Location name 9",
                      "city": "City 9",
                      "state": "TX",
                      "fullName": "Location name 9 - City 9, TX"
                  },
                  {
                      "name": "Location name 10",
                      "city": "City 10",
                      "state": "TX",
                      "fullName": "Location name 10 - City 10, TX"
                  }
              ]
          },
          "header": "Possible Affected Locations",
          "key": "possible_affected_locations",
          "name": "Possible Affected Locations",
          "order": 3,
          "type": "location-map",
          "hideMoreButton": true,
          "content": 8,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Name",
                      "key": "name",
                      "type": "name",
                      "width": "100%",
                      "id": 1
                  }
              ],
              "icon": "marketplace",
              "bgColor": "#53BAD1",
              "showHeader": false,
              "rows": [
                  {
                      "id": 1,
                      "name": "MONDELEZ INTERNATIONAL INC"
                  },
                  {
                      "id": 2,
                      "name": "GHIRARDELLI CHOCOLATE"
                  },
                  {
                      "id": 3,
                      "name": "FLAVORS R SPECIALTY INC"
                  },
                  {
                      "id": 4,
                      "name": "CONCORD FOODS"
                  },
                  {
                      "id": 5,
                      "name": "REDISTRIBUTOR REGENCY COFFEE"
                  },
                  {
                      "id": 6,
                      "name": "NAKED FOODS LTD"
                  },
                  {
                      "id": 7,
                      "name": "LINEAGE LOGISTICS"
                  },
                  {
                      "id": 8,
                      "name": "LYNCH FOODS"
                  },
                  {
                      "id": 9,
                      "name": "GOLD COAST BAKING CO INC"
                  }
              ]
          },
          "header": "Possible Affected Suppliers",
          "key": "possible_list",
          "name": "Possible Affected Suppliers",
          "order": 2,
          "type": "possible-list",
          "content": 9,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-tile",
          "data": {
              "isLoading": true
          },
          "header": "Total Distribution Center",
          "key": "total_distributors",
          "name": "Total Distribution Center",
          "order": 4,
          "type": "count",
          "content": 10,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Manufacturers",
                      "key": "name",
                      "type": "name",
                      "width": "58%",
                      "id": 1
                  },
                  {
                      "name": "Spend",
                      "key": "totalPurhase",
                      "type": "value",
                      "id": 2,
                      "align": "center",
                      "width": "20%"
                  },
                  {
                      "name": "PY%",
                      "key": "lastTotalPurhase",
                      "type": "pychange",
                      "id": 3,
                      "align": "center",
                      "width": "20%"
                  }
              ],
              "isForSpend": true,
              "menuOptions": {
                  "key": "toggle",
                  "text": "Total Cases"
              },
              "rows": [],
              "subheader": "Test Widget"
          },
          "header": "Top 10: MFR. by Spend",
          "key": "top_manufacturer",
          "name": "Top 10 Manufacturer",
          "order": 1,
          "type": "top-10",
          "content": 11,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-tile",
          "data": {
              "count": 201959092.2625,
              "isForSpend": true,
              "options": [
                  {
                      "id": "h0;D99C494B44E37EF8E4992E8E3160F910",
                      "name": "UNKNOWN",
                      "text": "UNKNOWN"
                  },
                  {
                      "id": "h10001;D99C494B44E37EF8E4992E8E3160F910",
                      "name": "BAKERY AND DESSERTS",
                      "text": "BAKERY AND DESSERTS"
                  },
                  {
                      "id": "h10002;D99C494B44E37EF8E4992E8E3160F910",
                      "name": "BEER WINE SPIRITS AND TOBACCO",
                      "text": "BEER WINE SPIRITS AND TOBACCO"
                  },
                  {
                      "id": "h10003;D99C494B44E37EF8E4992E8E3160F910",
                      "name": "BEVERAGES",
                      "text": "BEVERAGES"
                  }
              ],
              "pyChange": -35.78332533,
              "selected": "all",
              "showAllCount": true,
              "showAllOption": true,
              "showPy": true,
              "subheader": "Count Widget"
          },
          "header": "Total Spend By",
          "key": "total_spend_by",
          "name": "Total Spend by",
          "order": 7,
          "type": "count",
          "content": 12,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Manufacturers",
                      "key": "name",
                      "type": "name",
                      "width": "58%",
                      "id": 1
                  },
                  {
                      "name": "Spend",
                      "key": "totalPurhase",
                      "type": "value",
                      "id": 2,
                      "align": "center",
                      "width": "20%"
                  },
                  {
                      "name": "PY%",
                      "key": "lastTotalPurhase",
                      "type": "pychange",
                      "id": 3,
                      "align": "center",
                      "width": "20%"
                  }
              ],
              "isForSpend": true,
              "menuOptions": {
                  "key": "toggle",
                  "text": "Total Cases"
              },
              "rows": [],
              "subheader": "Test Widget"
          },
          "header": "Top 10: MFR. by Spend",
          "key": "top_manufacturer",
          "name": "Top 10 Manufacturer",
          "order": 1,
          "type": "top-10",
          "content": 13,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "columns": [
                  {
                      "name": "Manufacturers",
                      "key": "name",
                      "type": "name",
                      "width": "58%",
                      "id": 1
                  },
                  {
                      "name": "Spend",
                      "key": "totalPurhase",
                      "type": "value",
                      "id": 2,
                      "align": "center",
                      "width": "20%"
                  },
                  {
                      "name": "PY%",
                      "key": "lastTotalPurhase",
                      "type": "pychange",
                      "id": 3,
                      "align": "center",
                      "width": "20%"
                  }
              ],
              "isForSpend": true,
              "menuOptions": {
                  "key": "toggle",
                  "text": "Total Cases"
              },
              "rows": [],
              "subheader": "Test Widget"
          },
          "header": "Top 10: MFR. by Spend",
          "key": "top_manufacturer",
          "name": "Top 10 Manufacturer",
          "order": 1,
          "type": "top-10",
          "content": 14,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "data": {
              "chartData": [
                  {
                      "date": "2018-04-19T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "percentIncDec": "-"
                  },
                  {
                      "date": "2018-04-26T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "iconClass": "-",
                      "percentIncDec": "0.0%"
                  },
                  {
                      "date": "2018-05-02T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "iconClass": "-",
                      "percentIncDec": "0.0%"
                  },
                  {
                      "date": "2018-05-09T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "iconClass": "-",
                      "percentIncDec": "0.0%"
                  },
                  {
                      "date": "2018-05-16T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "iconClass": "-",
                      "percentIncDec": "0.0%"
                  },
                  {
                      "date": "2018-05-23T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "iconClass": "-",
                      "percentIncDec": "0.0%"
                  },
                  {
                      "date": "2018-05-31T18:30:00.000Z",
                      "value1": 5,
                      "color": {
                          "_value": {
                              "r": 255,
                              "g": 255,
                              "b": 255
                          }
                      },
                      "val2ToShow": "5.0",
                      "iconClass": "-",
                      "percentIncDec": "0.0%"
                  },
                  {
                      "date": "2018-06-07T18:30:00.000Z",
                      "value1": 15,
                      "color": {
                          "_value": {
                              "r": 226,
                              "g": 82,
                              "b": 65
                          }
                      },
                      "val2ToShow": "15.0",
                      "iconClass": "up",
                      "percentIncDec": "200.0%"
                  }
              ],
              "currentCount": 15,
              "priorCount": 5,
              "sessionName": "Week",
              "lastItemValue": 5,
              "hideAxis": true,
              "chartInterval": "day",
              "showCustomTooltip": true,
              "dateFormat": "yyyy-MM-dd",
              "color": "#E25241"
          },
          "header": "Shipping Overdue",
          "key": "shipping_overdue",
          "name": "PO Status Line Chart",
          "order": 1,
          "type": "po-status-line-chart",
          "iconClass": "itn-icon-delayed-loads",
          "content": 15,
          "isHeaderClickable": true
      },
      {
          "classes": "widget-one-by-one",
          "data": {
              "leftBlock": {
                  "count": 41,
                  "bottomLabel": "Total PO's",
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "utility-red-500",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FFF6F7"
              },
              "rightBlock": {
                  "count": 8,
                  "bottomLabel": "DC's Affected",
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "gray-600",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FAFAFA"
              },
              "menuOptions": [
                  {
                      "key": "edit",
                      "text": "Edit"
                  },
                  {
                      "key": "delte",
                      "text": "Delete"
                  },
                  {
                      "key": "share",
                      "text": "Share"
                  },
                  {
                      "key": "export",
                      "text": "Export"
                  }
              ],
              "overrideMenuOptions": true,
              "subheader": "Subheader"
          },
          "header": "Unconfirmed PO's",
          "key": "unconfirmed_pos",
          "name": "Unconfirmed POs",
          "order": 13,
          "type": "two-blocks",
          "content": 16,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-one",
          "data": {
              "leftBlock": {
                  "count": 41,
                  "bottomLabel": "Total Issues",
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "utility-red-500",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FFF6F7"
              },
              "middleBlock": {
                  "count": 31,
                  "bottomLabel": "< 3 Days",
                  "classes": "height-72",
                  "countClasses": "gray-700",
                  "bottomLabelClasses": "gray-600 font-weight-900",
                  "bgColor": "#F5F5F5"
              },
              "rightBlock": {
                  "count": 10,
                  "bottomLabel": "> 21 Days",
                  "classes": "height-72",
                  "countClasses": "gray-700",
                  "bottomLabelClasses": "gray-600 font-weight-900",
                  "bgColor": "#FAFAFA"
              },
              "menuOptions": [
                  {
                      "key": "edit",
                      "text": "Edit"
                  },
                  {
                      "key": "delte",
                      "text": "Delete"
                  },
                  {
                      "key": "share",
                      "text": "Share"
                  },
                  {
                      "key": "export",
                      "text": "Export"
                  }
              ],
              "overrideMenuOptions": true,
              "subheader": "Subheader"
          },
          "header": "DOH Minus Days Until Appt",
          "key": "doh_minus_days",
          "name": "DOH Minus Days Until Appt",
          "order": 14,
          "type": "three-blocks",
          "content": 17,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "id": 141,
          "classes": "widget-two-by-two",
          "data": {
              "fields": [
                  {
                      "align": "center",
                      "header": "STATE",
                      "key": "state",
                      "width": "3.5*",
                      "checked": true,
                      "text": "state",
                      "cellTemplate": "<div style=\"height:100%; display: flex;flex-direction: row;justify-content: flex-start;align-items: center;flex: 1 1 100%;\">\n          <img style=\"width: 24px; height: 24px; border: 1px solid #CFD8DC;border-radius: 50%; margin-right: 8px;\" src=\"assets/images/jpg/logo.jpg\"><div style=\"font-size: 12px;line-height: 16px;color: #212121;\">{val1}</div></div>",
                      "secondaryHeader": "States Watching:",
                      "specialColumn": true
                  },
                  {
                      "align": "center",
                      "header": "NAME",
                      "key": "name",
                      "width": "*",
                      "checked": true,
                      "text": "name",
                      "cellTemplate": "<div style=\"display: flex;flex-direction: row;justify-content: flex-start;align-items: center;\">\n              <div style=\"min-height: 8px;min-width: 8px;border-radius: 50%;background: #0D47A1;margin-right: 4px\"></div>\n              <div style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;flex: 1 1 100%;\">\n                <div style=\"font-size: 12px;line-height: 16px;color: #212121;\">{val1}</div>\n                <div style=\"font-size: 12px;line-height: 16px;color: #9E9E9E;\">{val2}</div>\n              </div>\n            </div>",
                      "headerTemplate": "<div style=\"display: flex;flex-direction: row;justify-content: flex-start;align-items: center;\">\n              <div style=\"min-height: 8px;min-width: 8px;border-radius: 50%;background: #0D47A1;margin-right: 4px\"></div>\n              <div style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;flex: 1 1 100%;\">\n                <div style=\"font-size: 12px;line-height: 16px;color: #212121;\">NAME</div>\n              </div>\n            </div>"
                  },
                  {
                      "align": "center",
                      "header": "DISCIPLINE",
                      "key": "discipline",
                      "width": "*",
                      "checked": true,
                      "text": "discipline",
                      "cellTemplate": "<div style=\"height:100%; display: flex;flex-direction: column;justify-content: center;align-items: flex-start;flex: 1 1 100%;\">\n          <div style=\"font-size: 12px;line-height: 16px;color: #212121;\">{val1}</div></div>"
                  },
                  {
                      "align": "center",
                      "header": "CITY",
                      "key": "city",
                      "width": "*",
                      "checked": true,
                      "text": "city",
                      "cellTemplate": "<div style=\"height:100%; display: flex;flex-direction: column;justify-content: center;align-items: flex-start;flex: 1 1 100%;\">\n          <div style=\"font-size: 12px;line-height: 16px;color: #212121;\">{val1}</div></div>"
                  }
              ],
              "bgColor": "#E25241",
              "showHeader": false,
              "subheader": "Subheader",
              "rows": [
                  {
                      "name": "John{{{DELIMITER}}}Lennon",
                      "discipline": "Musician",
                      "city": "Dakota1",
                      "state": "New York"
                  },
                  {
                      "name": "John{{{DELIMITER}}}Lennon2",
                      "discipline": "Musician",
                      "city": "Dakota2",
                      "state": "New York"
                  },
                  {
                      "name": "Don{{{DELIMITER}}}Henley",
                      "discipline": "Musician",
                      "city": "LA1",
                      "state": "California"
                  },
                  {
                      "name": "Jim{{{DELIMITER}}}Morrison",
                      "discipline": "Musician",
                      "city": "SC",
                      "state": "Arizona"
                  },
                  {
                      "name": "Don{{{DELIMITER}}}Henley2",
                      "discipline": "Musician",
                      "city": "LA2",
                      "state": "California"
                  },
                  {
                      "name": "Jim{{{DELIMITER}}}Morrison2",
                      "discipline": "Musician",
                      "city": "SC2",
                      "state": "Arizona"
                  }
              ]
          },
          "preferences": {
              "groupBy": [
                  "state"
              ],
              "groupHeaderFormat": "<div style=\"display: inline-flex;height: 100%; align-items: center;\n    padding-left:8px;\">\n      <span style=\"font-weight: bold;font-size: 12px;line-height: 12px;color: #212121;\">{value}</span>\n      <span style=\"color: #212121\" class=\"itn-icon-alert\"></span>\n      <span style=\"font-size: 12px;line-height: 12px;color: #616161;\">({count:n0} Musicians)</span>\n    </div>",
              "dropdownLabel": "ALERT DAY",
              "dropdownColumn": "state",
              "dropdownOptions": [
                  {
                      "id": 1,
                      "name": "7"
                  },
                  {
                      "id": 2,
                      "name": "14"
                  },
                  {
                      "id": 3,
                      "name": "21"
                  },
                  {
                      "id": 4,
                      "name": "28"
                  }
              ]
          },
          "header": "Musicians: World",
          "key": "musicians_world",
          "name": "Musicians: World",
          "order": 3,
          "type": "wijmo-grid",
          "hideMoreButton": false,
          "showChips": true,
          "chipOptions": [
              {
                  "id": 1,
                  "name": "Chip1",
                  "active": true
              },
              {
                  "id": 2,
                  "name": "Chip2"
              }
          ],
          "content": 18,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-one",
          "data": {
              "leftBlock": {
                  "count": 2,
                  "bottomLabel": "Items Expiring in ≤ 30 Days",
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "utility-red-500",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FFF"
              },
              "rightBlock": {
                  "rebates": [
                      {
                          "label": "≤60",
                          "days": 1
                      },
                      {
                          "label": "≤90",
                          "days": 16
                      },
                      {
                          "label": "≤180",
                          "days": 40
                      }
                  ],
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "gray-600",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FFF"
              },
              "menuOptions": [
                  {
                      "key": "edit",
                      "text": "Edit"
                  },
                  {
                      "key": "delte",
                      "text": "Delete"
                  },
                  {
                      "key": "share",
                      "text": "Share"
                  },
                  {
                      "key": "export",
                      "text": "Export"
                  }
              ],
              "overrideMenuOptions": true,
              "subheader": "User's Subheader Name"
          },
          "header": "Expiring Rebates",
          "key": "expiring_rebates",
          "name": "Expiring Rebates",
          "order": 16,
          "type": "expiring-rebates",
          "content": 19,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-one",
          "data": {
              "leftBlock": {
                  "count": 0,
                  "bottomLabel": "Items Expiring in ≤ 30 Days",
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "utility-red-500",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FFF"
              },
              "rightBlock": {
                  "rebates": [
                      {
                          "label": "≤60",
                          "days": 0
                      },
                      {
                          "label": "≤90",
                          "days": 0
                      },
                      {
                          "label": "≤180",
                          "days": 0
                      }
                  ],
                  "countFontStyle": "bold",
                  "classes": "height-72",
                  "countClasses": "gray-600",
                  "bottomLabelClasses": "gray-900",
                  "bgColor": "#FFF"
              },
              "menuOptions": [
                  {
                      "key": "edit",
                      "text": "Edit"
                  },
                  {
                      "key": "delte",
                      "text": "Delete"
                  },
                  {
                      "key": "share",
                      "text": "Share"
                  },
                  {
                      "key": "export",
                      "text": "Export"
                  }
              ],
              "overrideMenuOptions": true,
              "subheader": "User's Subheader Name"
          },
          "header": "Expiring Rebates",
          "key": "expiring_rebates",
          "name": "Expiring Rebates",
          "order": 15,
          "type": "expiring-rebates",
          "content": 20,
          "isHeaderClickable": true,
          "iconClass": ""
      },
      {
          "classes": "widget-one-by-two",
          "data": {
              "productName": "YOY CORN",
              "type": "case",
              "month": "April",
              "currentYr": "'21",
              "currentPrice": 2.48,
              "previousYr": "'20",
              "previousPrice": 2.55,
              "pricePerIndex": "+5.0",
              "pricePerIndexAvgPrice": "-8.0",
              "priceChange": "-0.07",
              "priceChangePercentage": "-3.0",
              "subheader": "Subheader Name",
              "isRowClickable": true,
              "changeSign": "-"
          },
          "header": "Commodity Price Index",
          "key": "commodity_price_index",
          "name": "Commodity Price Index",
          "order": 16,
          "type": "price-index",
          "content": 21,
          "isHeaderClickable": true,
          "iconClass": ""
      }
    ]
   
    arr.map((res:any)=>{
      if(res.classes ==  "widget-one-by-two"){
         res["cols"]=1,
         res["rows"]=2,
         res["x"]= 0,
         res["y"]= 0
      }
      if(res.classes =="widget-two-by-four half-header"){
         res["cols"]=2,
         res["rows"]=1,
         res["x"]= 0,
         res["y"]= 0
      }
      if(res.classes =="widget-two-by-two"){
         res["cols"] = 1,
         res["rows"] = 1,
         res["x"]= 0,
         res["y"]= 0
      }
   })

   return arr ;
  }
}
