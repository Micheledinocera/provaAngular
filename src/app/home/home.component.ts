import { Component, ViewEncapsulation, OnDestroy, OnInit} from '@angular/core';
import {EventEmitterService} from '../service/event-emitter/event-emitter.service';
import { DataService } from '../service/data/data.service';
import { Router } from '@angular/router';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, OnInit {
    tabs: any[] = [
        {
            title: 'DASHBOARD',
            route: '/home/dashboard',
        },
        {
            title: 'SETUP',
            route: '/home/setup',
        },
        {
            title: 'ANALYTICS',
            route: '/home/analytics',
        },
        {
            title: 'TIPS',
            route: '/home/tips',
        },
        {
            title: 'TEAM',
            route: '/home/team',
        }
    ];

    constructor(
      private ee: EventEmitterService,
      private ds: DataService,
      private router: Router
    ) {}

    ngOnInit() {
      this.ee.onHomeEvent.emit(true);
    }

    ngOnDestroy() {
      this.ee.onHomeEvent.emit(false);
    }

    onChangePlanClick() {
        this.router.navigate(['change-plan']);
    }
}
