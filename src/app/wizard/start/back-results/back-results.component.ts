import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data/data.service';
import {WizardController} from '../wizard-controller';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BackResultModalComponent } from './modal/modal.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Query } from '../../../model/Query';
import { EventEmitterService } from '../../../service/event-emitter/event-emitter.service';
import { BackResults } from '../../../model/BackResults';

declare var $: any;

@Component({
  selector: 'app-back-results',
  templateUrl: './back-results.component.html',
  styleUrls: ['./back-results.component.css'],
  animations: WizardController.animation
})
export class BackResultsComponent implements OnInit {

    bsModalRef: BsModalRef;
    backResultsInfo = [];
    selectedSite;
    state;
    wizardController;
    info;
    searchText;
    fields= [];

    constructor(
        private router: Router,
        private dataservice: DataService,
        private ms: BsModalService,
        private ee: EventEmitterService
    ) {
        this.wizardController = new WizardController(this.router, this.dataservice);
        this.backResultsInfo = dataservice.getBackResults();
        this.fields = this.getSelectedBackResults(dataservice.getSelectedSite());
        ee.onModalDismissEvent.subscribe(
          (data) => {
            this.fields = data.data;
        });
        ee.onSelectSiteEvent.subscribe(
          (selectedSite) => {
            this.fields = this.getSelectedBackResults(dataservice.getSelectedSite());
        });
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
        this.wizardController.navigate(event, '/wizard/start/overview', '/wizard/start/fields');
    }

    modalShow() {
        this.bsModalRef = this.ms.show(BackResultModalComponent);
        for (const field of this.fields){
          this.bsModalRef.content.fields.push(new Query(field));
        }
    }

    getSelectedBackResults(selectedSite) {
      return this.backResultsInfo[selectedSite].backResults;
    }
}
