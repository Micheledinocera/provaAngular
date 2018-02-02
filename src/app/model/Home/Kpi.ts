export class Kpi {

  title: string;
  value: number;

  static getDummyKpis(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      title: 'Total Search',
      value: 440
    }, {
      title: 'Unique Visitors',
      value: 80
    }, {
        title: 'Average page visits per user',
        value: '5,5'
    }, {
        title: 'Total conversion value',
        value: '10.000'
    }, {
        title: 'Average value per conversion',
        value: '125'
    }, {
        title: 'Altro valore',
        value: 'xx'
    }];
    dummyData[timeRanges[1]] = [{
        title: 'Total Search',
        value: 445
    }, {
        title: 'Unique Visitors',
        value: 90
    }, {
        title: 'Average page visits per user',
        value: '6,5'
    }, {
        title: 'Total conversion value',
        value: '16.000'
    }, {
        title: 'Average value per conversion',
        value: '135'
    }, {
        title: 'Altro valore',
        value: 'xx'
    }];
    dummyData[timeRanges[2]] = [{
        title: 'Total Search',
        value: 540
    }, {
        title: 'Unique Visitors',
        value: 100
    }, {
        title: 'Average page visits per user',
        value: '5,4'
    }, {
        title: 'Total conversion value',
        value: '30.000'
    }, {
        title: 'Average value per conversion',
        value: '325'
    }, {
        title: 'Altro valore',
        value: 'xx'
    }];
    return dummyData;
  }

  constructor(data: any) {
      this.title = data.title;
      this.value = data.value;
  }
}
