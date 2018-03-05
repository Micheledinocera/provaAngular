import { Kpi } from './Kpi';
import { Table } from './Table';
import { DataService } from '../../service/data/data.service';

export class Dashboard {

  kpi: Kpi[][] = [];
  searches: Table[][] = [];
  clicked: Table[][] = [];
  timeRanges= [];

  constructor(
    data: any,
    ds: DataService
  ) {
    this.timeRanges = ds.getTimeRanges();
      for (const timeRange of this.timeRanges){
        this.kpi[timeRange] = [];
        this.searches[timeRange] = [];
        this.clicked[timeRange] = [];
      }

    this.populateData('kpi', this.kpi, data.kpi);
    this.populateData('table', this.searches, data.searches);
    this.populateData('table', this.clicked, data.clicked);
  }

  static getDummyDashboard(ds) {
    return {
      kpi: Kpi.getDummyKpis(ds),
      searches: Table.getDummyTables(ds),
      clicked: Table.getDummyTables(ds)
    };
  }

  static getDummyDashboard2(ds) {
    return {
      kpi: Kpi.getDummyKpis2(ds),
      searches: Table.getDummyTables2(ds),
      clicked: Table.getDummyTables2(ds)
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
        }
      }
    }
  }
}
