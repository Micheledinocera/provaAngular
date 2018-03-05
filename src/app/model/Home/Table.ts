export class Table {

  query: string;
  avg: number;
  count: number;

  static getDummyTables(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      query: 'Total Search',
      avg: 440,
      count: 500
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }];
    dummyData[timeRanges[1]] = [{
        query: 'Total Search',
        avg: 445,
        count: 505
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }];
    dummyData[timeRanges[2]] = [{
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }];
    return dummyData;
  }

  static getEmptyTable(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      query: 'Total Search',
      avg: 0,
      count: 0
    }];
    dummyData[timeRanges[1]] = [{
        query: 'Total Search',
        avg: 0,
        count: 0
    }];
    dummyData[timeRanges[2]] = [{
        query: 'Total Search',
        avg: 0,
        count: 0
    }];
    return dummyData;
  }

  static getDummyTables2(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      query: 'Total Search',
      avg: 440,
      count: 50
    }, {
        query: 'Total Search',
        avg: 40,
        count: 500
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }];
    dummyData[timeRanges[1]] = [{
        query: 'Total Search',
        avg: 445,
        count: 505
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500000
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }];
    dummyData[timeRanges[2]] = [{
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 4400,
        count: 5000
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }, {
        query: 'Total Search',
        avg: 440,
        count: 500
    }];
    return dummyData;
  }

  constructor(data: any) {
      this.query = data.query;
      this.avg = data.avg;
      this.count = data.count;
  }
}
