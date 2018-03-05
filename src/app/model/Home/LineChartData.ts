export class LineChartData {

  data: number[];
  label: string;
  fill: boolean;

  constructor(data: any) {
      this.data = data.data;
      this.label = data.label;
      this.fill = false;
  }

  static getDummyLineChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [
      {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Search',
          fill: false
      },
      {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Click',
          fill: false
      },
      {
          data: [18, 48, 77, 9, 80, 27, 40],
          label: 'Filter',
          fill: false
      }];
    dummyData[timeRanges[1]] = [
      {
          data: [65, 59, 80, 80, 50, 50, 40],
          label: 'Search',
          fill: false
      },
      {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Click',
          fill: false
      },
      {
          data: [18, 48, 77, 9, 80, 27, 40],
          label: 'Filter',
          fill: false
      }];
    dummyData[timeRanges[2]] = [
      {
          data: [65, 59, 85, 85, 55, 55, 40],
          label: 'Search',
          fill: false
      },
      {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Click',
          fill: false
      },
      {
          data: [18, 48, 77, 9, 80, 27, 40],
          label: 'Filter',
          fill: false
      }];
    return dummyData;
  }

  static getEmptyLineChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [
      {
        data: [],
        label: '',
        fill: false
      },
      {
        data: [],
        label: '',
        fill: false
      },
      {
        data: [],
        label: '',
        fill: false
      }];
    dummyData[timeRanges[1]] = [
      {
        data: [],
        label: '',
        fill: false
      },
      {
        data: [],
        label: '',
        fill: false
      },
      {
        data: [],
        label: '',
        fill: false
      }];
    dummyData[timeRanges[2]] = [
      {
        data: [],
        label: '',
        fill: false
      },
      {
        data: [],
        label: '',
        fill: false
      },
      {
        data: [],
        label: '',
        fill: false
      }];
    return dummyData;
  }
}
