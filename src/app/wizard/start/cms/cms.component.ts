import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../../../service/data/data.service';
import {WizardController} from '../wizard-controller';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css'],
  animations: WizardController.animation
})
export class CmsComponent implements OnInit {

    state;
    private wizardController;
    private info;
    private selectedCms;
    versions;

    constructor(
        private router: Router,
        private dataservice: DataService
    ) {
        this.wizardController = new WizardController(this.router, this.dataservice);
    }

    ngOnInit() {
        this.info = this.wizardController.initialazeView();
        this.state = this.info.state;
        this.versions = [];
    }

    slideOut() {
        this.state = 'startToLeft';
    }

    toWebsite(event) {
        this.dataservice.setSelectedCms(this.selectedCms);
        this.wizardController.navigate(event, '/wizard/start/website', '');
    }

    OnMagentoClick() {
        this.selectedCms = 'Magento';
        this.versions = ['Magento v.1', 'Magento v.2', 'Magento v.3'];
    }

    OnPrestashopClick() {
        this.selectedCms = 'Prestashop';
        this.versions = ['Prestashop v.1', 'Prestashop v.2', 'Prestashop v.3'];
    }

    OnCustomClick() {
        this.selectedCms = 'Custom';
        this.versions = ['Custom v.1', 'Custom v.2', 'Custom v.3'];
    }

    downloadPlugin() {
        $('.btn.ittweb-btn.next').removeAttr('disabled');
        $('.wizard-api-key').attr('value', '63ff46e0-029b-42ba-b78a-632b1b6dbea3');
    }
}
