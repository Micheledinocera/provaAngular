export class PieChartData {

  labels: string[];
  data: number[];

  constructor(data: any) {
      this.labels = data.labels;
      this.data = data.data;
  }

  static getDummyPieChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      labels: ['dato1', 'dato2', 'dato3'],
      data: [300, 500, 100]
    }];
    dummyData[timeRanges[1]] = [{
      labels: ['dato1', 'dato2', 'dato3', 'dato4'],
      data: [30, 5000, 100, 300]
    }];
    dummyData[timeRanges[2]] = [{
      labels: ['dato1', 'dato2', 'dato3'],
      data: [3000, 50, 100]
    }];
    return dummyData;
  }

  static getEmptyPieChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      labels: [''],
      data: [100]
    }];
    dummyData[timeRanges[1]] = [{
      labels: [''],
      data: [100]
    }];
    dummyData[timeRanges[2]] = [{
      labels: [''],
      data: [100]
    }];
    return dummyData;
  }
}
