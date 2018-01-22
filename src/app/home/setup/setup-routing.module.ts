import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SetupComponent} from "./setup.component";
import {SynonimousComponent} from "./synonimous/synonimous.component";
import {FineTuningComponent} from "./fine-tuning/fine-tuning.component";
import {StopWordsComponent} from "./stop-words/stop-words.component";
import {CurrentSettingsComponent} from "./current-settings/current-settings.component";

const routes: Routes = [
    {
        path: '',
        component: SetupComponent,
        children: [
            {
                path: '',
                redirectTo: 'currentSettings',
                pathMatch: 'full',
            }, {
                path: 'currentSettings',
                component: CurrentSettingsComponent
            }, {
                path: 'synonimous',
                component: SynonimousComponent
            }, {
                path: 'stopWords',
                component: StopWordsComponent
            }, {
                path: 'fineTuning',
                component: FineTuningComponent
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SetupRoutingModule { }

export const routingComponents = [ SetupComponent,SynonimousComponent,StopWordsComponent,CurrentSettingsComponent,FineTuningComponent];
