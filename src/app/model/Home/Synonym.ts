export class Synonym {

  word: string;
  synonyms: string[];

  constructor(data: any) {
      this.word = data.word;
      this.synonyms = data.synonyms;
  }

  static getDummySynonyms() {
    return [{
      word: 'word1',
      synonyms: ['synonim1', 'synonim2', 'synonim3']
    }, {
        word: 'word2',
        synonyms: ['synonim1-2', 'synonim2-2', 'synonim3-2']
    }];
  }

  static getDummySynonyms2() {
    return [{
      word: 'word1asd',
      synonyms: ['synonim1asd', 'synonim2asd', 'synonim3']
    }, {
        word: 'word2asd',
        synonyms: ['synonim1-2asd', 'synonim2-2', 'synonim3-2']
    }];
  }

}
