
export class Tip {

  name: string;
  percentage: number;
  synonimous: string[];

  constructor(data: any) {
      this.name = data.name;
      this.percentage = data.percentage;
      this.synonimous = data.synonimous;
  }

  static getDummyTips() {
    return [
      {
        name: 'Building',
        percentage: '2',
        synonimous: ['Apartment', 'House']
      }, {
        name: 'Street',
        percentage: '1',
        synonimous: ['Apartment', 'House']
      }, {
        name: 'Room',
        percentage: '5',
        synonimous: ['Apartment', 'House']
      }
    ];
  }

  static getDummyTips2() {
    return [
      {
        name: 'Building',
        percentage: '2',
        synonimous: ['Apartment', 'House']
      }, {
        name: 'Street',
        percentage: '1',
        synonimous: ['Apartment', 'House']
      }
    ];
  }
}
