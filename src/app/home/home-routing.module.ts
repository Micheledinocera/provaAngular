import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from "./home.component";
import {AnalitycsComponent} from "./analitycs/analitycs.component";
import {SetupComponent} from "./setup/setup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TipsComponent} from "./tips/tips.component";
import {TeamComponent} from "./team/team.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }, {
                path: 'dashboard',
                component: DashboardComponent
            }, {
                path: 'setup',
                component: SetupComponent
            }, {
                path: 'analytics',
                component: AnalitycsComponent
            }, {
                path: 'tips',
                component: TipsComponent
            }, {
                path: 'team',
                component: TeamComponent
            }
        ],
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule { }

export const routingComponents = [ HomeComponent,AnalitycsComponent,SetupComponent,DashboardComponent,TipsComponent,TeamComponent];