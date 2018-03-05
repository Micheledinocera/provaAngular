export class SelectableItem {

  value: string;
  checked: boolean;

  constructor(data: any) {
    this.value = data.value;
    this.checked = data.checked ? data.checked : false;
  }
}
