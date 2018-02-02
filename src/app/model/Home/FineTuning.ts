import { Currency } from './Currency';
import { EngageSearch } from './EngageSearch';
import { Weight } from './Weight';
import { Ip } from './Ip';

export class FineTuning {

  currency: Currency;
  placeholder: string;
  jsLayer: string;
  engageSearchs: EngageSearch[] = [];
  weights: Weight[] = [];
  ips: Ip[] = [];

  constructor(data: any) {
      this.currency = new Currency(data.currency);
      this.placeholder = data.placeholder;
      this.jsLayer = data.jsLayer;
      for (const engageSearch of data.engageSearchs)
        this.engageSearchs.push(new EngageSearch(engageSearch));
      for (const weight of data.weights)
        this.weights.push(new Weight(weight));
      for (const ip of data.ips)
        this.ips.push(new Ip(ip));
  }

  static getDummyFineTuning() {
    return {
      currency: Currency.getDummyCurrency(),
      placeholder: 'placeholder',
      jsLayer: 'Grid view',
      engageSearchs: EngageSearch.getDummyEngageSearches(),
      weights: Weight.getDummyWeights(),
      ips: Ip.getDummyIps()
    };
  }

}
