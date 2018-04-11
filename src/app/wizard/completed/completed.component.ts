import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import {EventEmitterService} from '../../service/event-emitter/event-emitter.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent implements OnInit {

  wizardWebsite;

  constructor(private ds: DataService, private ee: EventEmitterService, private router: Router) { }

  ngOnInit() {
    this.wizardWebsite = this.ds.getWizardSite().name;
    window.scrollTo(0, 0);
  }

  navigate(type) {
    this.ee.onSelectSiteEvent.emit(this.wizardWebsite);
    this.ds.setSelectedSite(this.wizardWebsite);
    if (type === 'dashboard')
      this.router.navigateByUrl('home/dashboard');
    else
      this.router.navigateByUrl('home/setup/fineTuning');
  }
}
