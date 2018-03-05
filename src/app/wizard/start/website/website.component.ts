import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data/data.service';
import {EventEmitterService} from '../../../service/event-emitter/event-emitter.service';
import {WizardController} from '../wizard-controller';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-website',
    templateUrl: './website.component.html',
    styleUrls: ['./website.component.css'],
    animations: WizardController.animation
})

export class WebsiteComponent implements OnInit {
    state;
    wizardController;
    info;
    searchText;
    siteValue;
    import= 'N';
    importSiteValue;
    sitesFiltred= [];
    sites= [];

    constructor(
        private router: Router,
        private dataservice: DataService,
        private ee: EventEmitterService
    ) {
        this.wizardController = new WizardController(this.router, this.dataservice);
        this.sites = dataservice.getSitesList();
    }

    ngOnInit() {
        this.info = this.wizardController.initialazeView();
        this.state = this.info.state;
    }

    slideOutLeft() {
        this.state = 'startToLeft';
    }

    slideOutRight() {
        this.state = 'startToRight';
    }

    navigate(event) {
        this.dataservice.setSelectedSiteWizard(this.siteValue);
        if (this.import === 'N')
          this.importSiteValue = '';
        this.dataservice.importSiteWizardFrom(this.importSiteValue);
        this.wizardController.navigate(event, '/wizard/start/fields', '/wizard/start/cms');
    }

    onChange(siteValue) {
      this.sitesFiltred = this.sites.filter(function(i) {
        return i.name !== siteValue;
      });
    }
}
