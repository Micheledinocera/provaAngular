import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardRoutingModule} from './wizard-routing.module';
import { NbRouteTabsetModule} from '@nebular/theme';

import { routingComponents} from './wizard-routing.module';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  imports: [
      CommonModule,
      WizardRoutingModule,
      NbRouteTabsetModule
  ],
  declarations: [
      routingComponents,
      CompletedComponent
  ]
})
export class WizardModule { }
