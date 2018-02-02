import { Injectable } from '@angular/core';
import { User } from '../../model/User';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Website } from '../../model/Website';
import { Dashboard } from '../../model/Home/Dashboard';
import { Setup } from '../../model/Home/Setup';
import { Analytics } from '../../model/Home/Analytics';
import { Cms } from '../../model/Cms';
import { Fields } from '../../model/Fields';
import { BackResults } from '../../model/BackResults';
import { Kpi } from '../../model/Home/Kpi';
import { Table } from '../../model/Home/Table';

@Injectable()
export class DataService {

  private timeRanges= ['Last Week', 'Last Month', 'Last Year'];
  private user = new BehaviorSubject<User>(new User(''));
  private origin = new BehaviorSubject<String>('');
  private selectedSite = new BehaviorSubject<String>('');
  private kpiData= [];
  private websites = new BehaviorSubject<Website[]>([]);

  getTimeRanges() {
    return this.timeRanges;
  }

  constructor() {}

  setUser(user: User) {
    this.user.next(user);
  }

  getUser() {
    return this.user.getValue();
  }

  setSelectedSite(selectedSite: string) {
    this.selectedSite.next(selectedSite);
  }

  getSelectedSite() {
    return this.selectedSite.getValue();
  }

  setOrigin(origin: String) {
      this.origin.next(origin);
  }
  getOrigin() {
      return this.origin.getValue();
  }

  getWebsites(data) {
    const websitesData = [];
    for (const website of data)
      websitesData.push(website);
    this.websites.next(websitesData);
  }

  getDummyWebsites() {
    const websitesData = [
      Website.getDummyWebsite1(this),
      Website.getDummyWebsite2(this)
    ];
    this.websites.next(websitesData);
    return this.websites;
  }

  getSitesList(): string[] {
    const sites = [];
    for (const site of this.websites.getValue()){
      sites.push(site.name);
    }
    return sites;
  }

  getBackResults() {
    const backResultInfo = [];
    for (const site of this.websites.getValue()){
      backResultInfo[site.name] = site.backResults;
    }
    return backResultInfo;
  }
}
