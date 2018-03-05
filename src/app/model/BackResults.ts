import { SelectableItem } from './SelectableItem';

export class BackResults {

  backResults: SelectableItem[] = [];

  constructor(data: any) {
    for (const item of data)
      this.backResults.push(new SelectableItem(item));
  }

  static getDummyBackResults() {
    return [
      {
          value: 'title',
          checked: true
      }, {
          value: 'description',
          checked: true
      }, {
          value: 'tag',
          checked: false
      }, {
          value: 'price',
          checked: false
      }
    ];
  }

  static getDummyBackResults2() {
    return [
      {
          value: 'title2',
          checked: true
      }, {
          value: 'description2',
          checked: true
      }, {
          value: 'tag2',
          checked: false
      }, {
          value: 'price2',
          checked: false
      }
    ];
  }

  static getDummyBackResultsUnchecked() {
    return [
      {
          value: 'title2',
          checked: false
      }, {
          value: 'description2',
          checked: false
      }, {
          value: 'tag2',
          checked: false
      }, {
          value: 'price2',
          checked: false
      }
    ];
  }
}
