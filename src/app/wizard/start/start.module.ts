import { NgModule } from '@angular/core';
import { StartRoutingModule } from "./start-routing.module";
import { NbRouteTabsetModule } from "@nebular/theme";

import { CmsComponent } from './cms/cms.component';
import { WebsiteComponent } from './website/website.component';
import { FieldsComponent } from './fields/fields.component';
import { BackResultsComponent } from './back-results/back-results.component';
import { StartComponent } from './start.component';

@NgModule({
  imports: [
      StartRoutingModule,
      NbRouteTabsetModule
  ],
  declarations: [CmsComponent, WebsiteComponent, FieldsComponent, BackResultsComponent,StartComponent]
})
export class StartModule { }
