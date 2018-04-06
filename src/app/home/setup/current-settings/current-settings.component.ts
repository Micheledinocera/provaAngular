import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data/data.service';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { Router } from '@angular/router';
import { TreeviewConfig } from 'ngx-treeview';
import { AnimationController } from '../../../animationController';
import { Facet } from '../../../model/Facet';

@Component({
  selector: 'app-current-settings',
  templateUrl: './current-settings.component.html',
  styleUrls: ['./current-settings.component.css'],
  animations: AnimationController.animation
})
export class CurrentSettingsComponent implements OnInit {

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

  time;
  categories;
  facets;
  fields;
  queries;
  wizardSite;
  backResultsInfo;
  categoryExclude;
  backResults;
  facetsUnselectedDynamic;

  facetTypes= Facet.TYPES;
  constructor(
      private router: Router,
      private dataservice: DataService,
      private ee: EventEmitterService
  ) {
    ee.onSelectSiteEvent.subscribe((selectedSite) => {
      this.getDataFromDataService(dataservice.getSelectedSite());
    });
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
  }

  ngOnInit() {
    this.time = 1;
    this.backResultsInfo = this.getDataFromDataService(this.dataservice.getSelectedSite());
  }

  getDataFromDataService(sitename) {
    this.backResultsInfo = this.dataservice.getBackResults(sitename);
    this.fields = this.dataservice.getFields(sitename);
    this.backResults = this.backResultsInfo ? this.backResultsInfo.backResults : null;
    if ( this.fields ) {
      this.categories = this.fields.categories;
      this.queries = this.fields.queries;
      this.facets = this.fields.facets;
      this.facetsUnselectedDynamic = this.fields.facetsUnselectedDynamic;
      this.categoryExclude = this.fields.categoryExclude;
    }
  }

  onArrowClicked(item) {
      item.collapsed = !item.collapsed;
  }

  toWizard() {
    this.dataservice.setSelectedSiteWizard(this.dataservice.getSelectedSite());
    this.router.navigateByUrl('wizard/start/fields');
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }
}
