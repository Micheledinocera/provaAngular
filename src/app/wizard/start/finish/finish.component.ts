import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data/data.service';
import {WizardController} from '../wizard-controller';
import {TreeviewConfig, TreeviewItem} from 'ngx-treeview';
import { Category } from '../../../model/Category';
import { Query } from '../../../model/Query';
import { Facet } from '../../../model/Facet';
import { BackResults } from '../../../model/BackResults';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';

declare var $: any;

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css'],
  animations: WizardController.animation
})

export class FinishComponent implements OnInit {

    state;
    wizardController;
    info;

    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: true,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 400,
    });

    categories;
    facets;
    fields;
    queries;
    wizardSite;
    backResultsInfo;
    backResults;
    facetsUnselectedDynamic;
    categoryExclude;

    facetTypes= Facet.TYPES;
    constructor(
        private router: Router,
        private dataservice: DataService,
        private ee: EventEmitterService
    ) {
        this.wizardController = new WizardController(this.router, this.dataservice);
    }

    ngOnInit() {
      this.info = this.wizardController.initialazeView();
      this.state = this.info.state;
      this.wizardSite = this.dataservice.getWizardSite();
      this.backResultsInfo = this.dataservice.getBackResults(this.wizardSite.name);
      this.fields = this.dataservice.getFields(this.wizardSite.name);
      this.backResults = this.backResultsInfo ? this.backResultsInfo.backResults : null;
      if ( this.fields ) {
        this.categories = this.fields.categories;
        this.queries = this.fields.queries;
        this.facets = this.fields.facets;
        this.facetsUnselectedDynamic = this.fields.facetsUnselectedDynamic;
        this.categoryExclude = this.fields.categoryExclude;
      }
      window.scrollTo(0, 0);
    }

    slideOutLeft() {
        this.state = 'startDisappear';
    }

    slideOutRight() {
        this.state = 'startToRight';
    }

    navigate(event) {
      this.wizardController.navigate(event, '/wizard/completed', '/wizard/start/backResults');
      if (event.toState === 'startDisappear') {
        this.dataservice.setWizardSite('completed', null, this.wizardSite.name);
        this.ee.onCompletedEvent.emit(null);
      }
    }

    onArrowClicked(item) {
        item.collapsed = !item.collapsed;
    }
}
