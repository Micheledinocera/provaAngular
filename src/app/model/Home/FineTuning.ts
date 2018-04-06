import { Currency } from './Currency';
import { EngageSearch } from './EngageSearch';
import { Weight } from './Weight';
import { Ip } from './Ip';

export class FineTuning {

  currency: Currency;
  placeholder: string;
  webhook: string;
  jsLayer: string;
  engageSearchs: EngageSearch[] = [];
  weights: Weight[] = [];
  ips: Ip[] = [];
  voiceSearch: boolean;
  googleapikey: string;

  constructor(data: any) {
      this.currency = new Currency(data.currency);
      this.placeholder = data.placeholder;
      this.voiceSearch = data.voiceSearch;
      this.googleapikey = data.googleapikey;
      this.webhook = data.webhook;
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
      webhook: 'http://domain/api/get',
      jsLayer: 'Grid view',
      voiceSearch: true,
      googleapikey: '123456',
      engageSearchs: EngageSearch.getDummyEngageSearches(),
      weights: Weight.getDummyWeights(),
      ips: Ip.getDummyIps()
    };
  }

  static getDummyFineTuning2() {
    return {
      currency: Currency.getDummyCurrency2(),
      placeholder: 'placeholder2',
      webhook: 'http://domain/api/get',
      jsLayer: 'List view',
      voiceSearch: false,
      googleapikey: '',
      engageSearchs: EngageSearch.getDummyEngageSearches2(),
      weights: Weight.getDummyWeights2(),
      ips: Ip.getDummyIps2()
    };
  }

}
