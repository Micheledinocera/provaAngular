export class Sku {
  value: string;
  checked: boolean;
  isMain: boolean;

  constructor(response: any) {
      this.value = response.value;
      this.checked = response.checked ? response.checked : false;
      this.isMain = response.isMain;
  }

  static getDummySkus() {
    return [new Sku(
      {
          value: 'sku1',
          checked: true,
          isMain: false
      }), new Sku({
          value: 'sku2',
          checked: true,
          isMain: false
      }), new Sku({
          value: 'sku3',
          checked: true,
          isMain: true
      }), new Sku({
          value: 'sku4',
          checked: true,
          isMain: false
      })
    ];
  }

  static getDummySkusUnchecked() {
    return [new Sku(
      {
          value: 'sku1',
          isMain: false
      }), new Sku({
          value: 'sku2',
          isMain: false
      }), new Sku({
          value: 'sku3',
          isMain: false
      }), new Sku({
          value: 'sku4',
          isMain: false
      })
    ];
  }

  static getDummySkusChecked() {
    return [new Sku(
      {
          value: 'sku1',
          checked: true,
          isMain: false
      }), new Sku({
          value: 'sku2',
          checked: true,
          isMain: false
      }), new Sku({
          value: 'sku3',
          checked: true,
          isMain: false
      }), new Sku({
          value: 'sku4',
          checked: true,
          isMain: false
      })
    ];
  }
}
