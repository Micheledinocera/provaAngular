export class Kpi {

  title: string;
  value: number;

  static getEmptyKpis(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      title: 'Total Search',
      value: 0
    }, {
      title: 'Unique Visitors',
      value: 0
    }, {
        title: 'Average page visits per user',
        value: '0'
    }, {
        title: 'Total conversion value',
        value: '0'
    }, {
        title: 'Average value per conversion',
        value: '0'
    }, {
        title: 'Total conversions',
        value: '0'
    }];
    dummyData[timeRanges[1]] = [{
        title: 'Total Search',
        value: 0
    }, {
        title: 'Unique Visitors',
        value: 0
    }, {
        title: 'Average page visits per user',
        value: '0'
    }, {
        title: 'Total conversion value',
        value: '0'
    }, {
        title: 'Average value per conversion',
        value: '0'
    }, {
        title: 'Total conversions',
        value: '0'
    }];
    dummyData[timeRanges[2]] = [{
        title: 'Total Search',
        value: 0
    }, {
        title: 'Unique Visitors',
        value: 0
    }, {
        title: 'Average page visits per user',
        value: '0'
    }, {
        title: 'Total conversion value',
        value: '0'
    }, {
        title: 'Average value per conversion',
        value: '0'
    }, {
        title: 'Total conversions',
        value: '0'
    }];
    return dummyData;
  }

  static getDummyKpis(ds) {
    const timeRanges = ds.getTimeRanges();
    let dummyData = {};
    dummyData = {[timeRanges[0]]: [{
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
        title: 'Total conversions',
        value: '100'
    }], [timeRanges[1]]: [{
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
        title: 'Total conversions',
        value: '10'
    }], [timeRanges[2]]: [{
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
        title: 'Total conversions',
        value: '50'
    }]};
    return dummyData;
  }

  static getDummyKpis2(ds) {
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
        value: '5,55'
    }, {
        title: 'Total conversion value',
        value: '10.0000'
    }, {
        title: 'Average value per conversion',
        value: '12500'
    }, {
        title: 'Total conversions',
        value: '10000'
    }];
    dummyData[timeRanges[1]] = [{
        title: 'Total Search',
        value: 44500
    }, {
        title: 'Unique Visitors',
        value: 900
    }, {
        title: 'Average page visits per user',
        value: '60,5'
    }, {
        title: 'Total conversion value',
        value: 1600000
    }, {
        title: 'Average value per conversion',
        value: '1350000'
    }, {
        title: 'Total conversions',
        value: '1000'
    }];
    dummyData[timeRanges[2]] = [{
        title: 'Total Search',
        value: 54000
    }, {
        title: 'Unique Visitors',
        value: 10000
    }, {
        title: 'Average page visits per user',
        value: '50,4'
    }, {
        title: 'Total conversion value',
        value: '30.000'
    }, {
        title: 'Average value per conversion',
        value: '32500'
    }, {
        title: 'Total conversions',
        value: '5000'
    }];
    return dummyData;
  }

  constructor(data: any) {
      this.title = data.title;
      this.value = data.value;
  }
}
