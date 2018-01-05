import { Component} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

    public data =
        [{
            label: 'Dataset 1',
            backgroundColor: 'yellow',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        }, {
            label: 'Dataset 2',
            backgroundColor: 'green',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
        ];
    //
    // public options = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //     elements: {
    //         rectangle: {
    //             borderWidth: 2,
    //         },
    //     },
    //     scales: {
    //         xAxes: [
    //             {
    //                 gridLines: {
    //                     display: true,
    //                     color: 'blue',
    //                 },
    //                 ticks: {
    //                     fontColor: 'blue',
    //                 },
    //             },
    //         ],
    //         yAxes: [
    //             {
    //                 gridLines: {
    //                     display: false,
    //                     color: 'green',
    //                 },
    //                 ticks: {
    //                     fontColor: 'green',
    //                 },
    //             },
    //         ],
    //     },
    //     legend: {
    //         position: 'right',
    //         labels: {
    //             fontColor: 'red',
    //         },
    //     },
    // };


    public barChartData={datasets:[
          {
              data: [65, 59, 80, 81, 56, 55, 40],
          } , {
              data: [28, 48, 40, 19, 86, 27, 90],
          }
          ]
    };

    public barChartLabels:any = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    public barChartOptions:any = {
        elements: {
            rectangle: {
                borderWidth: 2,
            }
        },
        responsive: true,
        legend: {
            position: 'right',
        },
        scales: {
          xAxes: [
              {
                  gridLines: {
                      display: false,
                      color: 'blue',
                  },
                  ticks: {
                      fontColor: 'blue',
                  },
              },
          ],
          yAxes: [
              {
                  gridLines: {
                      display: true,
                      color: 'blue',
                  },
                  ticks: {
                      fontColor: 'blue',
                  },
              },
          ],
      },
    };
    // public barChartColors:Array<any> = [
    //     { // grey
    //         backgroundColor: 'rgba(254,0,0,0.2)',
    //         borderColor: 'rgba(254,0,0,0.2)',
    //         pointBackgroundColor: 'rgba(148,159,177,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: 'rgba(254,0,0,0.2)',
    //         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //     },
    //     { // dark grey
    //         backgroundColor: 'rgba(0,254,0,0.2)',
    //         borderColor: 'rgba(0,254,0,0.2)',
    //         pointBackgroundColor: 'rgba(77,83,96,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: 'rgba(0,254,0,0.2)',
    //         pointHoverBorderColor: 'rgba(77,83,96,1)'
    //     },
    //     { // grey
    //         backgroundColor: 'rgba(0,0,254,0.2)',
    //         borderColor: 'rgba(0,0,254,0.2)',
    //         pointBackgroundColor: 'rgba(148,159,177,1)',
    //         pointBorderColor: '#fff',
    //         pointHoverBackgroundColor: 'rgba(0,0,254,0.2)',
    //         pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //     }
    // ];
    public barChartLegend:boolean = true;
    public barChartType:string = 'horizontalBar';

    // events
    public chartClicked(e:any):void {

    }

    public chartHovered(e:any):void {

    }
}
