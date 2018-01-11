import { NgModule } from '@angular/core';
import { SetupRoutingModule} from "./setup-routing.module";
import { NbRouteTabsetModule } from "@nebular/theme";

import { SetupComponent } from './setup.component';
import { routingComponents} from "./setup-routing.module";
import { CurrentSettingsComponent } from './current-settings/current-settings.component';
import { SynonimousComponent } from './synonimous/synonimous.component';
import { StopWordsComponent } from './stop-words/stop-words.component';
import { FineTuningComponent } from './fine-tuning/fine-tuning.component';

@NgModule({
  imports: [
      SetupRoutingModule,
      NbRouteTabsetModule
  ],
  declarations: [
      SetupComponent,
      routingComponents,
      CurrentSettingsComponent,
      SynonimousComponent,
      StopWordsComponent,
      FineTuningComponent
  ]
})
export class SetupModule { }
