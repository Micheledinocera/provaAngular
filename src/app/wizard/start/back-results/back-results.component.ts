import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class BackResultsComponent implements OnInit, OnDestroy {

    bsModalRef: BsModalRef;
    backResultsInfo;
    selectedSite;
    state;
    wizardController;
    info;
    searchText;
    wizardSite;
    fields= [];

    constructor(
        private router: Router,
        private dataservice: DataService,
        private ms: BsModalService,
        private ee: EventEmitterService
    ) {
        this.wizardController = new WizardController(this.router, this.dataservice);
        ee.onModalDismissEvent.subscribe(
          (data) => {
            this.fields = data.data;
        });
    }

    ngOnInit() {
      this.info = this.wizardController.initialazeView();
      this.state = this.info.state;
      this.wizardSite = this.dataservice.getWizardSite();
      this.backResultsInfo = this.dataservice.getBackResults(this.wizardSite.name);
      this.fields = this.backResultsInfo ? this.backResultsInfo.backResults : BackResults.getDummyBackResultsUnchecked();
    }

    ngOnDestroy() {
      this.dataservice.setWizardSite('backResults', { backResults: {backResults: this.fields }}, this.wizardSite.name);
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
