export class PieChartData {

  labels: string[];
  data: number[];

  constructor(data: any) {
      this.labels = data.labels;
      this.data = data.data;
  }
}
