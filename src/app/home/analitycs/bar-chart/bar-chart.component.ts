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
          data: [65, 59, 80, 81, 56, 55, 40]
      }, {
          label: 'Dataset 2',
          backgroundColor: 'green',
          data: [28, 48, 40, 19, 86, 27, 90]
      }
    ];

    public barChartLabels: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    public barChartOptions: any = {
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

    public barChartLegend = true;
    public barChartType = 'horizontalBar';

    // events
    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }
}
