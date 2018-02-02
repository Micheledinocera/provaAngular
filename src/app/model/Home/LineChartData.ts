export class LineChartData {

  data: number[];
  label: string;
  fill: boolean;

  constructor(data: any) {
      this.data = data.data;
      this.label = data.label;
      this.fill = false;
  }

  static getDummyLineChartData(ds){
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [
      {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          fill: false
      },
      {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          fill: false
      },
      {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          fill: false
      }];
    dummyData[timeRanges[1]] = [
      {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          fill: false
      },
      {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          fill: false
      },
      {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          fill: false
      }];
    dummyData[timeRanges[2]] = [
      {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          fill: false
      },
      {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          fill: false
      },
      {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          fill: false
      }];
    return dummyData;
  }
}
