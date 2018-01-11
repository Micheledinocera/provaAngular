import {Component, OnInit,ViewEncapsulation} from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit{

    tabs: any[] = [
        {
            title: 'Current Settings',
            route: '/home/setup/currentSettings',
        },
        {
            title: 'Synonimus',
            route: '/home/setup/synonimus',
        },
        {
            title: 'Stop Words',
            route: '/home/setup/stopWords',
        },
        {
            title: 'Fine Tuning',
            route: '/home/setup/fineTuning',
        }
    ];

    ngOnInit(){
        $(".ittweb-tabset").children(0).children(0).eq(1).addClass("active");
        // debugger;
        // $(".ittweb-tabset-setup ul li a").hover(function(){
        //     $(this).css("color", "#306ccc");
        // }, function(){
        //     $(this).css("color", "#a4abb3");
        // });
    }
}