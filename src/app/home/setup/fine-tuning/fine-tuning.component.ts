import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SynonymousModalComponent } from '../synonimous/synonimous-modal/modal.component';
import { EngageSearchModalComponent } from './engage-search-modal/engage-search-modal.component';
import { DataService } from '../../../service/data/data.service';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { Ip } from '../../../model/Home/Ip';
import { Currency } from '../../../model/Home/Currency';
import { AnimationController } from '../../../animationController';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-fine-tuning',
  templateUrl: './fine-tuning.component.html',
  styleUrls: ['./fine-tuning.component.css'],
  animations: AnimationController.animation
})
export class FineTuningComponent implements OnInit, OnDestroy {

  ipv4REGEX= RegExp('^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$');
  ipv6REGEX= RegExp('^s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*(\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8]))?$');
  time;
  state;
  currencies = ['Euro - €', 'Dollar - $'];
  showModes = ['Grid view', 'List view'];
  bsModalRef: BsModalRef;
  ips = [];
  validateIp= [];
  currency;
  separator= 'Dot';
  placeholder;
  webhook;
  voiceSearch;
  googleapikey;
  showMode;
  engageSearchs = [];
  weights = [];

  constructor(
    private ms: BsModalService,
    private ds: DataService,
    private ee: EventEmitterService
  ) {
    ee.onSelectSiteEvent.subscribe((selectedSite) => {
      this.getDataFromDataService(ds.getSelectedSite());
    });
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
  }

  ngOnInit() {
    this.time = 1;
    this.getDataFromDataService(this.ds.getSelectedSite());
  }

  googleApiKeyCheck() {
    if (this.googleapikey === '')
      this.voiceSearch = false;
  }

  ngOnDestroy() {
    this.ds.setWizardSite('fineTuning', {
      fineTuning: {
        ips: this.ips,
        currency: new Currency({currency: this.currency, separator: this.separator}),
        jsLayer: this.showMode,
        placeholder: this.placeholder,
        webhook: this.webhook,
        voiceSearch: this.voiceSearch,
        googleapikey: this.googleapikey,
        weights: this.weights,
        engageSearchs: this.engageSearchs
      }}, this.ds.getSelectedSite());
  }

  addWord() {
    this.ips.push(new Ip({ip: '', editable: true}));
    this.validateIp.push(true);
  }

  updateWord(event, ip) {
    if (ip.editable)
      ip.ip = event.target.parentElement.children[0].value;
    ip.editable = !ip.editable;
  }

  addSearch() {
    this.bsModalRef = this.ms.show(EngageSearchModalComponent);
    this.bsModalRef.content.type = 'add';
    this.bsModalRef.content.engageSearchs = this.engageSearchs;
  }

  ipCheck(ip, index) {
    if (!this.ipv4REGEX.test(ip) && !this.ipv6REGEX.test(ip))
      this.validateIp[index] = false;
    else
      this.validateIp[index] = true;
  }

  editSearch(engageSearch) {
    this.bsModalRef = this.ms.show(EngageSearchModalComponent, engageSearch);

    this.bsModalRef.content.keywords = '';
    for (const keyword of engageSearch.keywords){
        this.bsModalRef.content.keywords += keyword + ',';
    }
    this.bsModalRef.content.keywords = this.bsModalRef.content.keywords.substring(0, this.bsModalRef.content.keywords.length - 1);
    if ( this.bsModalRef.content.templates.indexOf(engageSearch.template) >= 0) {
        this.bsModalRef.content.selectedTemplate = engageSearch.template;
    } else {
        this.bsModalRef.content.templateSelection = 'Html';
        this.bsModalRef.content.selectedTemplateHtml = engageSearch.template;
    }

    this.bsModalRef.content.type = 'edit';
    this.bsModalRef.content.engagesearch = engageSearch;
    this.bsModalRef.content.index = this.engageSearchs.indexOf(engageSearch);
    this.bsModalRef.content.engageSearchs = this.engageSearchs;
  }

  removeIp(ip) {
      const index = this.ips.indexOf(ip);

      if (index >= 0) {
          this.ips.splice(index, 1);
          this.validateIp.splice(index, 1);
      }
  }

  removeSearch(search) {
    const index = this.engageSearchs.indexOf(search);

    if (index >= 0) {
        this.engageSearchs.splice(index, 1);
    }
  }

  getDataFromDataService(selectedSite) {
    if (this.ds.getFineTuning()[selectedSite]) {
      this.ips = this.ds.getFineTuning()[selectedSite].ips;
      this.ips.forEach(() => this.validateIp.push(true));
      this.currency = this.ds.getFineTuning()[selectedSite].currency.currency;
      this.separator = this.ds.getFineTuning()[selectedSite].currency.separator;
      this.showMode = this.ds.getFineTuning()[selectedSite].jsLayer;
      this.placeholder = this.ds.getFineTuning()[selectedSite].placeholder;
      this.webhook = this.ds.getFineTuning()[selectedSite].webhook;
      this.voiceSearch = this.ds.getFineTuning()[selectedSite].voiceSearch;
      this.googleapikey = this.ds.getFineTuning()[selectedSite].googleapikey;
      this.weights = this.ds.getFineTuning()[selectedSite].weights;
      this.engageSearchs = this.ds.getFineTuning()[selectedSite].engageSearchs;
    } else {
      this.ips = [];
      this.currency = this.currencies[0];
      this.separator = 'Dot';
      this.showMode = 'Grid view';
      this.placeholder = '';
      this.webhook = '';
      this.voiceSearch = false;
      this.googleapikey = '';
      this.weights = [];
      this.engageSearchs = [];
    }
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }
}
