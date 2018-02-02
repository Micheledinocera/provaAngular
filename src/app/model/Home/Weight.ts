export class Weight {

  title: string;
  value: number;

  constructor(data: any) {
      this.title = data.title;
      this.value = data.value;
  }

  static getDummyWeights() {
    return [{
      title: 'Titolo',
      value: '8'
    }, {
      title: 'Descrizione',
      value: '4'
    }];
  }
}
