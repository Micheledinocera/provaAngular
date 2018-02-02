export class Synonym {

  word: string;
  synonyms: string[];

  constructor(data: any) {
      this.word = data.word;
      this.synonyms = data.synonyms;
  }

  static getDummySynonyms() {
    const words = [{
      word: 'word1',
      synonyms: ['synonim1', 'synonim2', 'synonim3']
    }, {
        word: 'word2',
        synonyms: ['synonim1-2', 'synonim2-2', 'synonim3-2']
    }];
    return {synonims: words};
  }

}
