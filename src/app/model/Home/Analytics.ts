import { Kpi } from './Kpi';
import { Table } from './Table';
import { PieChartData } from './PieChartData';
import { LineChartData } from './LineChartData';
import { HorizontalChartData } from './HorizontalChartData';
import { MapChartData } from './MapChartData';
import { DataService } from '../../service/data/data.service';

declare var google: any;

export class Analytics {

  pieChartData: PieChartData[][] = [];
  kpis: Kpi[][] = [];
  clicked: Table[][] = [];
  lookingFor: Table[][] = [];
  noResults: Table[][] = [];
  searches: Table[][] = [];
  conversion: Table[][] = [];
  clickPerRow: Table[][] = [];

  averageResultsData: Table[][] = [];
  wordsData: Table[][] = [];
  charactersData: Table[][] = [];
  conversionPerRowData: Table[][] = [];

  mapChartData: MapChartData[][] = [];
  uploadedProductsChartData: HorizontalChartData[][] = [];
  requestChartData: HorizontalChartData[][] = [];
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
        this.averageResultsData[timeRange] = [];
        this.wordsData[timeRange] = [];
        this.charactersData[timeRange] = [];
        this.conversionPerRowData[timeRange] = [];
        this.clicked[timeRange] = [];
        this.lookingFor[timeRange] = [];
        this.noResults[timeRange] = [];
        this.searches[timeRange] = [];
        this.conversion[timeRange] = [];
        this.clickPerRow[timeRange] = [];
        this.mapChartData[timeRange] = [];
        this.pieChartData[timeRange] = [];
        this.uploadedProductsChartData[timeRange] = [];
        this.requestChartData[timeRange] = [];
        this.lineChartSearch[timeRange] = [];
        this.lineChartVisitors[timeRange] = [];
        this.lineChartConversion[timeRange] = [];
      }
      this.populateData('kpi', this.kpis, data.kpis);
      this.populateData('table', this.clicked, data.clicked);
      this.populateData('table', this.averageResultsData, data.averageResultsData);
      this.populateData('table', this.wordsData, data.wordsData);
      this.populateData('table', this.charactersData, data.charactersData);
      this.populateData('table', this.conversionPerRowData, data.conversionPerRowData);
      this.populateData('table', this.lookingFor, data.lookingFor);
      this.populateData('table', this.noResults, data.noResults);
      this.populateData('table', this.searches, data.searches);
      this.populateData('table', this.conversion, data.conversion);
      this.populateData('table', this.clickPerRow, data.clickPerRow);
      this.populateData('pieChart', this.pieChartData, data.pieChartData);
      this.populateData('mapChart', this.mapChartData, data.mapChartData);
      this.populateData('horizontalChart', this.uploadedProductsChartData, data.uploadedProductsChartData);
      this.populateData('horizontalChart', this.requestChartData, data.requestChartData);
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
      averageResultsData: Table.getDummyTables(ds),
      wordsData: Table.getDummyTables(ds),
      charactersData: Table.getDummyTables(ds),
      conversionPerRowData: Table.getDummyTables(ds),
      mapChartData: MapChartData.getDummyMapChartData(ds),
      uploadedProductsChartData: HorizontalChartData.getDummyHorizontalChartData(ds),
      requestChartData: HorizontalChartData.getDummyHorizontalChartData(ds),
      pieChartData: PieChartData.getDummyPieChartData(ds),
      lineChartSearch: LineChartData.getDummyLineChartData(ds),
      lineChartVisitors: LineChartData.getDummyLineChartData(ds),
      lineChartConversion: LineChartData.getDummyLineChartData(ds)
    };
  }

  static getEmptyAnalytics(ds) {
    return {
      kpis: Kpi.getEmptyKpis(ds),
      clicked: Table.getEmptyTable(ds),
      lookingFor: Table.getEmptyTable(ds),
      noResults: Table.getEmptyTable(ds),
      searches: Table.getEmptyTable(ds),
      conversion: Table.getEmptyTable(ds),
      clickPerRow: Table.getEmptyTable(ds),
      averageResultsData: Table.getEmptyTable(ds),
      wordsData: Table.getEmptyTable(ds),
      charactersData: Table.getEmptyTable(ds),
      conversionPerRowData: Table.getEmptyTable(ds),
      mapChartData: MapChartData.getEmptyMapChartData(ds),
      uploadedProductsChartData: HorizontalChartData.getEmptyHorizontalChartData(ds),
      requestChartData: HorizontalChartData.getEmptyHorizontalChartData(ds),
      pieChartData: PieChartData.getEmptyPieChartData(ds),
      lineChartSearch: LineChartData.getEmptyLineChartData(ds),
      lineChartVisitors: LineChartData.getEmptyLineChartData(ds),
      lineChartConversion: LineChartData.getEmptyLineChartData(ds)
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
            result[timeRange].push(item);
            break;
          case 'pieChart':
            result[timeRange].push(new PieChartData(item));
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
  }
}
