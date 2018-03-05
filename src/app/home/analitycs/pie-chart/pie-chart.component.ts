import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
declare var $: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnChanges {

  @Input() data;
  // Pie

  public pieChartColors;
  pieChartLabels;
  pieChartData;
  generalData;
  public pieChartType = 'pie';
  public refresh = true;
  state;

  public pieChartOptions: any = {
    responsive: true
  };

  constructor(private ee: EventEmitterService) {
  }

  ngOnChanges() {
    this.refreshChart();
  }

  refreshChart() {
    this.generalData = this.data[0];
    this.refresh = false;
    if (this.pieChartLabels)
      this.pieChartLabels.splice();
    this.pieChartLabels = this.data[0].labels;
    this.pieChartData = this.data[0].data;
    if (this.pieChartColors)
      this.pieChartColors.splice();
    this.pieChartColors = [{backgroundColor : this.data[0].pieChartColors}];
    setTimeout(() => {
      this.refresh = true;
    }, 10);
  }

  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
}
