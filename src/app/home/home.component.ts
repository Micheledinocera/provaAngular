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
            route: '/dashboard',
        },
        {
            title: 'SETUP',
            route: '/setup',
        },
        {
            title: 'ANALYTICS',
            route: '/analytics',
        },
        {
            title: 'TIPS',
            route: '/tips',
        },
        {
            title: 'TEAM',
            route: '/team',
        },
    ];
}
