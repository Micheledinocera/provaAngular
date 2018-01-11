import { Component,OnInit} from '@angular/core';

declare var google :any;

@Component({
  selector: 'app-bubble-map',
  templateUrl: './bubble-map.component.html',
  styleUrls: ['./bubble-map.component.css']
})
export class BubbleMapComponent implements OnInit{

    ngOnInit() {
        google.charts.load('current', {'packages': ['geochart']});
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {

            var data = google.visualization.arrayToDataTable([
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ]);

            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }
    }
}
