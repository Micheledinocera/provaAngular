import {Component, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { EventEmitterService } from '../../service/event-emitter/event-emitter.service';

declare var jquery: any;
declare var $: any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css'],
})

export class StartComponent implements AfterViewInit {
  isFromEditWizardEvent = false;
  tabs: any[] = [
      {
          title: 'CMS',
          route: '/wizard/start/cms'
      }, {
          title: 'WEBSITE',
          route: '/wizard/start/website',
      }, {
          title: 'FIELDS',
          route: '/wizard/start/fields',
      }, {
          title: 'BACK RESULTS',
          route: '/wizard/start/backResults',
      }, {
          title: 'OVERVIEW',
          route: '/wizard/start/overview',
      }
  ];

  constructor(private ee: EventEmitterService) {
    this.ee.onEditWizardEvent.subscribe(
      (data) => {
        this.isFromEditWizardEvent = true;
      }
    );
  }

  ngAfterViewInit() {
    if (!this.isFromEditWizardEvent)
      $('.ittweb-tabset').children(0).children(0).addClass('avoid-clicks', 'tab-disabled');
  }

  getState(outlet) {
    debugger;
      return outlet.activatedRouteData.state;
  }
}
