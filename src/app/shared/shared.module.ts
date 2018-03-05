import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe, FilterOnValuePipe, OnlyCheckedPipe, OnlyIncompletedPipe, OnlyCompletedPipe} from '../pipes/filter.pipe';
import { PieChartComponent } from '../home/analitycs/pie-chart/pie-chart.component';
import { BarChartComponent } from '../home/analitycs/bar-chart/bar-chart.component';
import { LineChartComponent } from '../home/analitycs/line-chart/line-chart.component';
import { BubbleMapComponent} from '../home/analitycs/bubble-map/bubble-map.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    OnlyCompletedPipe, FilterPipe, FilterOnValuePipe, OnlyCheckedPipe, OnlyIncompletedPipe,
    // PieChartComponent, BarChartComponent, LineChartComponent, BubbleMapComponent
  ],
  exports: [
    OnlyCompletedPipe, FilterPipe, FilterOnValuePipe, OnlyCheckedPipe, OnlyIncompletedPipe,
    // PieChartComponent, BarChartComponent, LineChartComponent, BubbleMapComponent
  ],
  entryComponents: [
    // PieChartComponent, BarChartComponent, LineChartComponent, BubbleMapComponent
  ]
})
export class SharedModule { }
