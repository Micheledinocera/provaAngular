export class HorizontalChartData {

  label: string;
  backgroundColor: string;
  borderWidth: number;
  data: number[];

  constructor(data: any) {
      this.label = data.label;
      this.backgroundColor = data.backgroundColor;
      this.borderWidth = data.borderWidth;
      this.data = data.data;
  }

  static getDummyHorizontalChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
        label: 'Dataset 1',
        backgroundColor: 'yellow',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      }, {
        label: 'Dataset 2',
        backgroundColor: 'green',
        data: [28, 48, 40, 19, 86, 27, 90]
      }];
    dummyData[timeRanges[1]] = [{
        label: 'Dataset 1',
        backgroundColor: 'yellow',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      }, {
          label: 'Dataset 2',
          backgroundColor: 'green',
          data: [28, 48, 40, 19, 86, 27, 90]
      }];
    dummyData[timeRanges[2]] = [{
        label: 'Dataset 1',
        backgroundColor: 'yellow',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      }, {
        label: 'Dataset 2',
        backgroundColor: 'green',
        data: [28, 48, 40, 19, 86, 27, 90]
      }];
    return dummyData;
  }

  static getEmptyHorizontalChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [{
      label: 'Dataset 1',
      backgroundColor: 'yellow',
      borderWidth: 1,
      data: []
      }, {
          label: 'Dataset 2',
          backgroundColor: 'green',
          data: []
      }];
    dummyData[timeRanges[1]] = [{
        label: 'Dataset 1',
        backgroundColor: 'yellow',
        borderWidth: 1,
        data: []
      }, {
        label: 'Dataset 2',
        backgroundColor: 'green',
        data: []
      }];
    dummyData[timeRanges[2]] = [{
        label: 'Dataset 1',
        backgroundColor: 'yellow',
        borderWidth: 1,
        data: []
      }, {
        label: 'Dataset 2',
        backgroundColor: 'green',
        data: []
      }];
    return dummyData;
  }
}
