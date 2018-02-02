export class Cms {

  cms: string;
  versions: string[];

  constructor(data: any) {
      this.cms = data.cms;
      this.versions = data.versions;
  }
}
