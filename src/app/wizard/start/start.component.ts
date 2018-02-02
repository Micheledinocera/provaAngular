import {Component, ViewEncapsulation, AfterViewInit} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css'],
})

export class StartComponent implements AfterViewInit {
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

    constructor() {
    }

    ngAfterViewInit() {
      $('.ittweb-tabset').children(0).children(0).addClass('avoid-clicks', 'tab-disabled');
    }

    getState(outlet) {
      debugger;
        return outlet.activatedRouteData.state;
    }
}
