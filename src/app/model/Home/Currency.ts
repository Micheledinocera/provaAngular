
export class Currency {

  currency: string;
  separator: string;

  constructor(data: any) {
      this.currency = data.currency;
      this.separator = data.separator;
  }

  static getDummyCurrency() {
    return {
      currency: 'Euro - €',
      separator: 'Dot'
    };
  }
}
