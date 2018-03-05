export class MapChartData {

  country: string;
  value: number;

  constructor(data: any) {
      this.country = data.country;
      this.value = data.value;
  }

  static getDummyMapChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]];
    dummyData[timeRanges[1]] = [
      ['Country', 'Popularity'],
      ['Germany', 20000],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 50],
      ['France', 60],
      ['RU', 70]];
    dummyData[timeRanges[2]] = [
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700000]];
    return dummyData;
  }

  static getEmptyMapChartData(ds) {
    const timeRanges = ds.getTimeRanges();
    const dummyData = [];
    dummyData[timeRanges[0]] = [
      ['Country', 'Popularity'],
      ['Germany', 0],
      ['United States', 0],
      ['Brazil', 0],
      ['Canada', 0],
      ['France', 0],
      ['RU', 0]];
    dummyData[timeRanges[1]] = [
      ['Country', 'Popularity'],
      ['Germany', 0],
      ['United States', 0],
      ['Brazil', 0],
      ['Canada', 0],
      ['France', 0],
      ['RU', 0]];
    dummyData[timeRanges[2]] = [
      ['Country', 'Popularity'],
      ['Germany', 0],
      ['United States', 0],
      ['Brazil', 0],
      ['Canada', 0],
      ['France', 0],
      ['RU', 0]];
    return dummyData;
  }
}
