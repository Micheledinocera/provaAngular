import { Synonym } from './Synonym';
import { StopWords } from './StopWords';
import { FineTuning } from './FineTuning';

export class Setup {

  synonims: Synonym[] = [];
  stopWords: StopWords;
  fineTuning: FineTuning;

  constructor(data: any) {
    for (const synonim of data.synonims)
      this.synonims.push(new Synonym(synonim));
    this.stopWords = new StopWords(data.stopWord);
    this.fineTuning = new FineTuning(data.fineTuning);
  }

  static getDummySetup(ds) {
    return {
      synonims: Synonym.getDummySynonyms(),
      stopWord: StopWords.getDummyStopWords(),
      fineTuning: FineTuning.getDummyFineTuning()
    };
  }

  static getDummySetup2(ds) {
    return {
      synonims: Synonym.getDummySynonyms2(),
      stopWord: StopWords.getDummyStopWords2(),
      fineTuning: FineTuning.getDummyFineTuning2()
    };
  }
}
