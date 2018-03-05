import { Component, AfterViewInit, OnChanges, Input } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-bubble-map',
  templateUrl: './bubble-map.component.html',
  styleUrls: ['./bubble-map.component.css']
})
export class BubbleMapComponent implements OnChanges {

  @Input() data;

  constructor() {}

  ngOnChanges() {
    google.charts.load('current', {'packages': ['geochart']});
    google.charts.setOnLoadCallback(this.drawRegionsMap(this.data));
  }

  drawRegionsMap(dataset) {
    const data = google.visualization.arrayToDataTable(dataset);
    const options = {colorAxis: {colors: ['#4f8fed']}};
    const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  }
}
