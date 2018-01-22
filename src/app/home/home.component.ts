import { Component, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {EventEmitterService} from "../service/event-emitter/event-emitter.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
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

    constructor(private ee:EventEmitterService){
        this.ee.onLoadingEvent.emit(true);
    }

    ngAfterViewInit() {
        this.ee.onLoadingEvent.emit(false);
    }
}
