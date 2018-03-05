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
import { Synonym } from '../../model/Home/Synonym';
import { StopWords } from '../../model/Home/StopWords';
import { FineTuning } from '../../model/Home/FineTuning';

@Injectable()
export class DataService {

  private timeRanges= ['Last Week', 'Last Month', 'Last Year'];
  private user = new BehaviorSubject<User>(new User(''));
  private origin = new BehaviorSubject<string>('');
  private selectedSite = new BehaviorSubject<string>('');
  private selectedCmsWizard = new BehaviorSubject<string>('');
  private selectedSiteWizard = new BehaviorSubject<string>('');
  private kpiData= [];
  private websites = new BehaviorSubject<Website[]>([]);
  private completedWebsites = new BehaviorSubject<Website[]>([]);
  websiteToImport;

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

  setSelectedSite(selectedSite) {
    this.selectedSite.next(selectedSite);
  }

  getSelectedSite() {
    return this.selectedSite.getValue();
  }

  setSelectedSiteWizard(selectedSiteWizard) {
    this.selectedSiteWizard.next(selectedSiteWizard);
  }

  getSelectedSiteWizard() {
    return this.selectedSiteWizard.getValue();
  }

  setSelectedCms(selectedCmsWizard) {
    this.selectedCmsWizard.next(selectedCmsWizard);
  }

  getSelectedCms() {
    return this.selectedCmsWizard.getValue();
  }

  setOrigin(origin: string) {
      this.origin.next(origin);
  }

  getOrigin() {
      return this.origin.getValue();
  }

  getWizardSite() {
    return this.websites.getValue().filter((i) => i.name === this.selectedSiteWizard.getValue())[0];
  }

  setWizardSite(type, data, siteName) {
    const website = this.websites.getValue().filter((i) => i.name === siteName)[0];
    const websitesToChange = this.websites.getValue();
    switch (type) {
      case 'fields':
        website.fields = data ? data.fields : null;
        break;
      case 'backResults':
        website.backResults = data ? data.backResults : null;
        break;
      case 'stopWords':
        if (website.setup)
          website.setup.stopWords.words = data ? data.words : null;
        break;
      case 'synonimous':
        if (website.setup)
          website.setup.synonims = data ? data.synonims : null;
        break;
      case 'fineTuning':
        if (website.setup)
          website.setup.fineTuning = data ? data.fineTuning : null;
        break;
      case 'users':
        website.users = data ? data.users : null;
        break;
      case 'completed':
        website.completed = true;
        this.completedWebsites.next(this.websites.getValue().filter(function(i) { return i.completed; }));
        break;
    }
    for (let site of websitesToChange)
      if (site.name === website.name)
        site = website;
    this.websites.next(websitesToChange);
  }

  importSiteWizardFrom(importSite) {
    let websiteWizard = new Website({name: this.selectedSiteWizard.getValue()}, null);
    if (importSite !== null && importSite !== '') {
      this.websiteToImport = this.completedWebsites.getValue().filter((i) => i.name === importSite)[0];
      websiteWizard = this.websites.getValue().filter((i) => i.name === this.selectedSiteWizard.getValue())[0];
      websiteWizard.fields = this.websiteToImport.fields;
      websiteWizard.backResults = this.websiteToImport.backResults;
    }
    let websitesToChange = this.websites.getValue();
    websitesToChange = websitesToChange.map(
      (value) => value.name === websiteWizard.name ? websiteWizard : value
    );
    this.websites.next(websitesToChange);
  }

  getWebsites(data) {
    const websitesData = [];
    for (const website of data)
      websitesData.push(new Website(website, this));
    this.websites.next(websitesData);
    this.completedWebsites.next(this.websites.getValue().filter(function(i) { return i.completed; }));
  }

  getDummyWebsites() {
    const websitesData = [
      Website.getDummyWebsite1(this),
      Website.getDummyWebsite2(this),
      Website.getDummyWebsite3(this)
    ];
    this.websites.next(websitesData);
    this.completedWebsites.next(this.websites.getValue().filter(function(i) { return i.completed; }));
    return this.websites;
  }

  checkAtLeastOneCompletedSite() {
    if (this.completedWebsites.getValue().length > 0)
      return true;
    return false;
  }

  checkAllCompletedSite() {
    if (this.completedWebsites.getValue().length === this.websites.getValue().length)
      return true;
    return false;
  }

  getSitesList() {
    const sites = [];
    for (const site of this.websites.getValue()){
      sites.push({name: site.name, completed: site.completed});
    }
    return sites;
  }

  getCompletedSitesList() {
    const sites = [];
    for (const site of this.websites.getValue()){
      sites.push({name: site.name, completed: site.completed});
    }
    return sites;
  }

  getBackResults(sitename) {
    const backResultInfo = [];
    for (const site of this.websites.getValue()){
      if ( site.name === sitename )
      return site.backResults;
    }
  }

  getFields(sitename): Fields {
    for (const site of this.websites.getValue()){
      if ( site.name === sitename )
        return site.fields;
    }
  }

  getSynonyms() {
    const SynonymsInfo = [];
    for (const site of this.completedWebsites.getValue()){
      SynonymsInfo[site.name] = site.setup ? site.setup.synonims : [];
    }
    return SynonymsInfo;
  }

  getTips() {
    const tipsInfo = [];
    for (const site of this.completedWebsites.getValue()){
      tipsInfo[site.name] = site.tips ? site.tips : [];
    }
    return tipsInfo;
  }

  getUsers() {
    const usersInfo = [];
    for (const site of this.completedWebsites.getValue()){
      usersInfo[site.name] = site.users ? site.users : [];
    }
    return usersInfo;
  }

  getStopWords(): StopWords[] {
    const StopWordsInfo = [];
    for (const site of this.completedWebsites.getValue()){
      StopWordsInfo[site.name] = site.setup ? site.setup.stopWords : {defaultWords: [], words: []};
    }
    return StopWordsInfo;
  }

  getDashboard(): Dashboard[] {
    const DashboardInfo = [];
    for (const site of this.completedWebsites.getValue()){
      DashboardInfo[site.name] = site.dashboard;
    }
    return DashboardInfo;
  }

  getFineTuning(): FineTuning[] {
    const FineTuningInfo = [];
    for (const site of this.completedWebsites.getValue()){
      FineTuningInfo[site.name] = site.setup ? site.setup.fineTuning : null;
    }
    return FineTuningInfo;
  }

  getAnalytics(type) {
    const AnalyticsInfo = [];
    for (const site of this.completedWebsites.getValue()){
      AnalyticsInfo[site.name] = site.analitycs ? site.analitycs[type] : null;
    }
    return AnalyticsInfo;
  }
}
