import { Component, Input } from '@angular/core';
import { DataService } from '../../../service/data/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

    @Input() lineChartData;
    timeRanges;
    state;

    constructor(private ds: DataService
    //  , private ee: EventEmitterService
    ) {
      this.timeRanges = ds.getTimeRanges();
    }
    // lineChart

    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
      responsive: true,
      borderWidth: 2,
      legend: {
        labels: {
          fontFamily: 'Montserrat, sans-serif',
        }
      },
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
    public lineChartColors: Array<any> = [
        { // blue
          borderWidth: 1,
          backgroundColor: '#306ccc',
          borderColor: '#306ccc',
          pointBackgroundColor: '#306ccc',
          pointBorderColor: '#306ccc',
          pointHoverBackgroundColor: '#306ccc',
          pointHoverBorderColor: '#306ccc'
        },
        { // grey
          borderWidth: 1,
          backgroundColor: '#9b9b9b',
          borderColor: '#9b9b9b',
          pointBackgroundColor: '#9b9b9b',
          pointBorderColor: '#9b9b9b',
          pointHoverBackgroundColor: '#9b9b9b',
          pointHoverBorderColor: '#9b9b9b'
        },
        { // red
          borderWidth: 1,
          backgroundColor: '#af333a',
          borderColor: '#af333a',
          pointBackgroundColor: '#af333a',
          pointBorderColor: '#af333a',
          pointHoverBackgroundColor: '#af333a',
          pointHoverBorderColor: '#af333a'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    ngOnInit() {
    }

}
