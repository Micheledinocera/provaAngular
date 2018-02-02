import { Dashboard } from './Home/Dashboard';
import { Setup } from './Home/Setup';
import { Analytics } from './Home/Analytics';
import { Cms } from './Cms';
import { Fields } from './Fields';
import { BackResults } from './BackResults';
import { DataService } from '../service/data/data.service';

export class Website {

  name: string;
  dashboard: Dashboard;
  setup: Setup;
  analitycs: Analytics;
  cms: string;
  fields: Fields;
  backResults: BackResults;

  constructor(
      data: any,
      ds: DataService
    ) {
      this.name = data.name;
      this.dashboard = new Dashboard(data.dashboard, ds);
      this.setup = new Setup(data.setup),
      this.analitycs = new Analytics(data.analitycs, ds),
      this.cms = data.cms,
      this.fields = new Fields(data.fields),
      this.backResults = new BackResults(data.backResults);
  }

  static getDummyWebsite1(ds: DataService) {
    return new Website({
      name: 'www.site1.com',
      dashboard: Dashboard.getDummyDashboard(ds),
      setup: Setup.getDummySetup(ds),
      analitycs: Analytics.getDummyAnalytics(ds),
      cms: 'Magentolo',
      fields: Fields.getDummyFields(),
      backResults: BackResults.getDummyBackResults()
    }, ds);
  }

  static getDummyWebsite2(ds: DataService) {
    return new Website({
      name: 'www.site2.com',
      dashboard: Dashboard.getDummyDashboard(ds),
      setup: Setup.getDummySetup(ds),
      analitycs: Analytics.getDummyAnalytics(ds),
      cms: 'Magentolo',
      fields: Fields.getDummyFields(),
      backResults: BackResults.getDummyBackResults2()
    }, ds);
  }
}
