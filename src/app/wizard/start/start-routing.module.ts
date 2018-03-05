import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start.component';
import { CmsComponent} from './cms/cms.component';
import { WebsiteComponent} from './website/website.component';
import { FieldsComponent} from './fields/fields.component';
import { BackResultsComponent} from './back-results/back-results.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
    {
        path: '',
        component: StartComponent,
        children: [
            {
                path: '',
                redirectTo: 'cms',
                pathMatch: 'full',
            }, {
                path: 'cms',
                component: CmsComponent
            }, {
                path: 'website',
                component: WebsiteComponent
            }, {
                path: 'fields',
                component: FieldsComponent
            }, {
                path: 'backResults',
                component: BackResultsComponent
            }, {
                path: 'overview',
                component: FinishComponent
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class StartRoutingModule { }

export const routingComponents = [StartComponent, CmsComponent, WebsiteComponent, FieldsComponent, BackResultsComponent, FinishComponent];
