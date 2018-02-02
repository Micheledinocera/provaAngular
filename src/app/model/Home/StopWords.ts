import { Word } from './Word';

export class StopWords {

  defaultWords: Word[] = [];
  words: Word[] = [];

  constructor(data: any) {
    for (const item of data.defaultWords)
      this.defaultWords.push(new Word(item));
    for (const item of data.words)
      this.words.push(new Word(item));
  }

  static getDummyStopWords() {
    const defaultWords = [{word: 'il'}, {word: 'lo'}, {word: 'la'}, {word: 'i'}, {word: 'gli'}, {word: 'le'}];
    const words = [{word: 'customWord2'}, {word: 'customWord1'}];
    return {
      defaultWords: defaultWords,
      words: words
    };
  }
}
