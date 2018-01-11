import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardRoutingModule} from "./wizard-routing.module";
import { NbRouteTabsetModule} from "@nebular/theme";

import { routingComponents} from "./wizard-routing.module";
import { FinishComponent } from './finish/finish.component';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  imports: [
      CommonModule,
      WizardRoutingModule,
      NbRouteTabsetModule
  ],
  declarations: [
      routingComponents,
      FinishComponent,
      CompletedComponent
  ]
})
export class WizardModule { }
