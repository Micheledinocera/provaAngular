import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
    encapsulation:ViewEncapsulation.None,
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit{
    tabs: any[] = [
        {
            title: 'CMS',
            route: '/wizard/start/cms',
        },
        {
            title: 'WEBSITE',
            route: '/wizard/start/website',
        },
        {
            title: 'FIELDS',
            route: '/wizard/start/fields',
        },
        {
            title: 'BACK RESULTS',
            route: '/wizard/start/backResults',
        }
    ];

    constructor(){
        // window.onload=function() {
        //     let tabset = $('.ittweb-tabset').children(0).children();
        //     for (let i = 0; i < 4; i++) {
        //         tabset.get(i).onclick = function (e) {
        //             e.preventDefault();
        //         };
        //     }
        // }
    }

    ngOnInit(){
    }
}
