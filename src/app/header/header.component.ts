import { Component, OnInit, ViewEncapsulation, OnChanges, HostListener } from '@angular/core';
import {DataService} from '../service/data/data.service';
import {Router} from '@angular/router';
import {User} from '../model/User';
import {EventEmitterService} from '../service/event-emitter/event-emitter.service';
import {CookieService} from 'ngx-cookie-service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Website } from '../model/Website';

declare var jquery: any;
declare var $: any;

@Component({
    host: {'(document:click)': 'onClick($event)'},
    encapsulation: ViewEncapsulation.None,
    selector: 'ittweb-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('appear', [
            state('hide', style({
                opacity: 0,
                display: 'none'
            })),
            state('show', style({
                opacity: 1,
                display: 'block'
            })),
            transition('hide <=> show', animate('100ms ease-in'))
        ])
      ]
})
export class HeaderComponent implements OnInit {

    showBack = false;
    user: User;
    state= 'hide';
    stateSites= 'hide';
    notificationState= 'hide';
    notifications= ['bla'];
    notificationDismissed= false;
    checkAtLeastOneCompletedSite;
    checkAllCompletedSite;
    sites = [];
    selectedSite = '';
    isDashboardView= false;

    constructor(
        private dataservice: DataService,
        private router: Router,
        private ee: EventEmitterService,
        private cs: CookieService
    ) {
        ee.onLoginEvent.subscribe(
          (data) => {
            this.user = data.user;
            this.sites = data.sites;
            this.selectedSite = this.sites[0].name;
            this.checkAllCompletedSite = this.dataservice.checkAllCompletedSite();
            this.checkAtLeastOneCompletedSite = this.dataservice.checkAtLeastOneCompletedSite();
          }
        );
        ee.onHomeEvent.subscribe(
          (data) => {
            this.isDashboardView = data;
          }
        );
        ee.onSelectSiteEvent.subscribe(
          (selectedSite) => {
            this.selectedSite = selectedSite;
          }
        );
        ee.onCompletedEvent.subscribe(
          (data) => {
            this.sites = this.dataservice.getSitesList();
            this.checkAllCompletedSite = this.dataservice.checkAllCompletedSite();
            this.checkAtLeastOneCompletedSite = this.dataservice.checkAtLeastOneCompletedSite();
          }
        );
    }

    ngOnInit() {
      this.checkAtLeastOneCompletedSite = this.dataservice.checkAtLeastOneCompletedSite();
      this.checkAllCompletedSite = this.dataservice.checkAllCompletedSite();
      if (this.checkAtLeastOneCompletedSite && this.sites.length > 0)
        this.selectedSite = this.sites[0].name;
    }

    wizardClick() {
      this.router.navigateByUrl('wizard/start/cms');
    }

    logoutClick() {
        this.user = new User('');
        this.dataservice.setUser(this.user);
        this.cs.delete('username');
        this.cs.delete('password');
        this.router.navigate(['']);
    }

    onClick(event) {
      try {
        if (
          !event.target.className.includes('user-icon')
        )
          this.state = 'hide';
        if (
          event.target.parentElement != null &&
          !event.target.parentElement.className.includes('sites-dropdown') &&
          event.target != null &&
          !event.target.className.includes('sites-dropdown')
        )
          this.stateSites = 'hide';
        if (
          !event.target.className.includes('notification-icon') && !event.target.className.includes('notification-icon-notification')
        )
          this.notificationState = 'hide';
      } catch (e) {
        // debugger;
      }
    }

    selectSite(site) {
      this.selectedSite = site;
      this.dataservice.setSelectedSite(this.selectedSite);
      this.ee.onSelectSiteEvent.emit(this.selectedSite);
    }
}
