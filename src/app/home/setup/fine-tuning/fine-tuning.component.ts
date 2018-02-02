import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SynonymousModalComponent } from '../synonimous/synonimous-modal/modal.component';
import { EngageSearchModalComponent } from './engage-search-modal/engage-search-modal.component';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-fine-tuning',
  templateUrl: './fine-tuning.component.html',
  styleUrls: ['./fine-tuning.component.css']
})
export class FineTuningComponent {

  bsModalRef: BsModalRef;
  ips = [];
  currency;
  currencies = [];
  separator= 'Dot';
  placeholder;
  showMode;
  showModes;
  engageSearchs = [];
  weights = [];

  constructor(private ms: BsModalService) {
      this.currencies = [
          'Euro - €',
          'Dollar - $'
      ];
      this.showModes = [
        'Grid view',
        'List view'
      ];
      this.engageSearchs = [
        {
          title: 'Titolo1',
          description: 'asdkjdhaskjfhaskdjfjsa',
          keywords: ['key1', 'key2'],
          template: 'Template2'
        } , {
          title: 'Titolo2',
          description: 'asdkjdhaskjfhaskdjfjsa',
          keywords: ['key3', 'key4'],
          template: 'TemplateHtml'
        }];
      this.weights = [{
        title: 'Titolo',
        value: '8'
      }, {
        title: 'Descrizione',
        value: '4'
      }];
      this.currency = this.currencies[0];
      this.showMode = this.showModes[0];
      this.ips = [
        {word: '192.168.0.1', editable: false},
        {word: '192.168.0.0/16', editable: false},
        {word: '127.0.0.0/8', editable: false}
      ];
  }

    addWord() {
      this.bsModalRef = this.ms.show(SynonymousModalComponent);
      this.bsModalRef.content.words = this.ips;
  }

  addSearch() {
    this.bsModalRef = this.ms.show(EngageSearchModalComponent);
    this.bsModalRef.content.type = 'add';
    this.bsModalRef.content.engageSearchs = this.engageSearchs;
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
      }
  }

  removeSearch(search) {
    const index = this.engageSearchs.indexOf(search);

    if (index >= 0) {
        this.engageSearchs.splice(index, 1);
    }
}
}
