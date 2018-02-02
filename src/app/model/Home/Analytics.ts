import { Kpi } from './Kpi';
import { Table } from './Table';
import { PieChartData } from './PieChartData';
import { LineChartData } from './LineChartData';
import { HorizontalChartData } from './HorizontalChartData';
import { MapChartData } from './MapChartData';
import { DataService } from '../../service/data/data.service';

declare var google: any;

export class Analytics {

  pieChartData: PieChartData[] = [];
  kpis: Kpi[][] = [];
  clicked: Table[][] = [];
  lookingFor: Table[][] = [];
  noResults: Table[][] = [];
  searches: Table[][] = [];
  conversion: Table[][] = [];
  clickPerRow: Table[][] = [];
  mapChartData: MapChartData[][] = [];
  horizontalChartData: HorizontalChartData[][] = [];
  lineChartSearch: LineChartData[][] = [];
  lineChartVisitors: LineChartData[][] = [];
  lineChartConversion: LineChartData[][] = [];
  timeRanges= [];

  constructor(
    data: any,
    ds: DataService
  ) {
      this.timeRanges = ds.getTimeRanges();
      for (const timeRange of this.timeRanges){
        this.kpis[timeRange] = [];
        this.clicked[timeRange] = [];
        this.lookingFor[timeRange] = [];
        this.noResults[timeRange] = [];
        this.searches[timeRange] = [];
        this.conversion[timeRange] = [];
        this.clickPerRow[timeRange] = [];
        this.mapChartData[timeRange] = [];
        this.horizontalChartData[timeRange] = [];
        this.lineChartSearch[timeRange] = [];
        this.lineChartVisitors[timeRange] = [];
        this.lineChartConversion[timeRange] = [];
      }
      this.populateData('kpi', this.kpis, data.kpis);
      this.populateData('table', this.clicked, data.clicked);
      this.populateData('table', this.lookingFor, data.lookingFor);
      this.populateData('table', this.noResults, data.noResults);
      this.populateData('table', this.searches, data.searches);
      this.populateData('table', this.conversion, data.conversion);
      this.populateData('table', this.clickPerRow, data.clickPerRow);
      for (const timeRange of this.timeRanges)
        this.pieChartData[timeRange] = new PieChartData(data.pieChartData);
      this.populateData('mapChart', this.mapChartData, data.mapChartData);
      this.populateData('horizontalChart', this.horizontalChartData, data.horizontalChartData);
      this.populateData('lineChart', this.lineChartSearch, data.lineChartSearch);
      this.populateData('lineChart', this.lineChartVisitors, data.lineChartVisitors);
      this.populateData('lineChart', this.lineChartConversion, data.lineChartConversion);
  }

  static getDummyAnalytics(ds) {
    return {
        kpis: Kpi.getDummyKpis(ds),
        clicked: Table.getDummyTables(ds),
        lookingFor: Table.getDummyTables(ds),
        noResults: Table.getDummyTables(ds),
        searches: Table.getDummyTables(ds),
        conversion: Table.getDummyTables(ds),
        clickPerRow: Table.getDummyTables(ds),
        mapChartData: MapChartData.getDummyMapChartData(ds),
        horizontalChartData: HorizontalChartData.getDummyHorizontalChartData(ds),
        pieChartData: {
          labels: ['dato1', 'dato2', 'dato3'],
          data: [300, 500, 100]
        },
        lineChartSearch: LineChartData.getDummyLineChartData(ds),
        lineChartVisitors: LineChartData.getDummyLineChartData(ds),
        lineChartConversion: LineChartData.getDummyLineChartData(ds)
      };
  }

  populateData(type, result, data) {
    for (const timeRange of this.timeRanges){
      for (const item of data[timeRange]){
        switch (type) {
          case 'kpi':
            result[timeRange].push(new Kpi(item));
            break;
          case 'table':
            result[timeRange].push(new Table(item));
            break;
          case 'mapChart':
            result[timeRange].push(new MapChartData(item));
            break;
          case 'lineChart':
            result[timeRange].push(new LineChartData(item));
            break;
          case 'horizontalChart':
            result[timeRange].push(new HorizontalChartData(item));
            break;
        }
      }
    }
    if (type === 'mapChat')
      for (const timeRange of this.timeRanges)
        result[timeRange] = google.visualization.arrayToDataTable(result[timeRange]);
  }
}
