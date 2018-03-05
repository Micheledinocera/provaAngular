export class Word {

  word: string;
  editable: boolean;

  constructor(data: any) {
      this.word = data.word;
      this.editable = data.editable ? data.editable : false;
  }
}
