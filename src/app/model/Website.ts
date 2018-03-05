import { Dashboard } from './Home/Dashboard';
import { Setup } from './Home/Setup';
import { Analytics } from './Home/Analytics';
import { Cms } from './Cms';
import { Fields } from './Fields';
import { BackResults } from './BackResults';
import { DataService } from '../service/data/data.service';
import { Tip } from './Home/Tip';
import { User } from './User';

export class Website {

  name: string;
  completed: boolean;
  dashboard: Dashboard;
  setup: Setup;
  analitycs: Analytics;
  cms: string;
  fields: Fields;
  backResults: BackResults;
  tips: Tip[];
  users: User[];

  constructor(
      data: any,
      ds: DataService
    ) {
      this.name = data.name;
      this.completed = data.completed ? data.completed : false;
      this.dashboard = data.dashboard ? new Dashboard(data.dashboard, ds) : null;
      this.setup = data.setup ? new Setup(data.setup) : null,
      this.analitycs = data.analitycs ? new Analytics(data.analitycs, ds) : null,
      this.cms = data.cms ? data.cms : null,
      this.fields = data.fields ? new Fields(data.fields) : null,
      this.backResults = data.backResults ? new BackResults(data.backResults) : null;
      this.tips = [];
      if (data.tips)
        for (const tip of data.tips)
          this.tips.push(new Tip(tip));
      this.users = [];
      if (data.users)
        for (const user of data.users)
          this.users.push(new User(user));
  }

  static getDummyWebsite1(ds: DataService) {
    return new Website({
      name: 'www.site1.com',
      completed: true,
      dashboard: Dashboard.getDummyDashboard(ds),
      setup: Setup.getDummySetup(ds),
      analitycs: Analytics.getDummyAnalytics(ds),
      cms: 'Magentolo',
      fields: Fields.getDummyFields(),
      backResults: BackResults.getDummyBackResults(),
      tips: Tip.getDummyTips(),
      users: User.getDummyUsers()
    }, ds);
  }

  static getDummyWebsite2(ds: DataService) {
    return new Website({
      name: 'www.site2.com',
      completed: true,
      dashboard: Dashboard.getDummyDashboard2(ds),
      setup: Setup.getDummySetup2(ds),
      analitycs: Analytics.getDummyAnalytics(ds),
      cms: 'Magentolo',
      fields: Fields.getDummyFields(),
      backResults: BackResults.getDummyBackResults2(),
      tips: Tip.getDummyTips2(),
      users: User.getDummyUsers2()
    }, ds);
  }

  static getDummyWebsite3(ds: DataService) {
    return new Website({
      name: 'www.site2.it'
    }, ds);
  }
}
