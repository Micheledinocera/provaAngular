import { Component, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent  {

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
}
