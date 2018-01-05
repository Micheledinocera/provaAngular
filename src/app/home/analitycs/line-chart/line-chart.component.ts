import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent{

    // lineChart
    public lineChartData:Array<any> = [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A',
            fill: false
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B',
            fill: false
        },
        {
            data: [18, 48, 77, 9, 100, 27, 40],
            label: 'Series C',
            fill: false
        }
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions:any = {
        responsive: true,
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
                stacked: false
            }]
        }
    };
    public lineChartColors:Array<any> = [
        { // grey
            backgroundColor: 'rgba(254,0,0,0.2)',
            borderColor: 'rgba(254,0,0,0.2)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(254,0,0,0.2)',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(0,254,0,0.2)',
            borderColor: 'rgba(0,254,0,0.2)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(0,254,0,0.2)',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(0,0,254,0.2)',
            borderColor: 'rgba(0,0,254,0.2)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(0,0,254,0.2)',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

}
