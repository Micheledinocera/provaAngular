export class Sku {
  value: string;
  checked: boolean;
  isMain: boolean;

  constructor(response: any) {
      this.value = response.value;
      this.checked = response.checked;
      this.isMain = response.isMain;
  }
}
