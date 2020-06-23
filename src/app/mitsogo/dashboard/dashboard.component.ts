import { Component,ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexResponsive,
 
  
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
// } from "ng-apexcharts";

export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit  {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  // @ViewChild("chart1") chart1: ChartComponent;
  // public chartOptions1: Partial<ChartOptions>;  

  @ViewChild("chart1", { static: false }) chart1: ChartComponent;
  public chartOptions1: Partial<any>;
 

  ngOnInit(): void {
  }
  constructor( ) {
  

    this.chartOptions = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
   

    this.chartOptions1 = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
     
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400,
                size:400
            },
            donut: {
              size: '75%'
            },
            plotOptions: {
              pie: {
                expandOnClick: false,                
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  

    public generateData(baseval, count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }
      return series;
    }
  
 
    element: any =[
      {location:'google.com',views:3746,sale:752,percent:46,total:19291},
      {location:'facebook.com',views:8126,sale:728,percent:32,total:17645},
      {location:'twitter.com',views:8834,sale:654,percent:28,total:65473},
      {location:'Direct,email,IM',views:1173,sale:596,percent:24,total:22435},
      {location:'linkedin.com',views:2329,sale:867,percent:20,total:435677},     
    ];
  
}


