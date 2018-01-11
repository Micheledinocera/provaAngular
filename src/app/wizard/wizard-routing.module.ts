import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WizardComponent} from "./wizard.component";
import {FinishComponent} from "./finish/finish.component";
import {CompletedComponent} from "./completed/completed.component";

const routes: Routes = [
    {
        path: '',
        component: WizardComponent
    },
    {
        path: 'start',
        loadChildren: './start/start.module#StartModule'
    },
    {
        path: 'finish',
        component: FinishComponent
    },
    {
        path: 'completed',
        component: CompletedComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class WizardRoutingModule { }

export const routingComponents = [WizardComponent,FinishComponent,CompletedComponent];