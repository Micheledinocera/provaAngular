import { NgModule } from '@angular/core';
import { SetupRoutingModule} from './setup-routing.module';
import { NbRouteTabsetModule } from '@nebular/theme';
import { MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material';
import { MatCheckboxModule, MatRadioModule } from '@angular/material';

import { SetupComponent } from './setup.component';
import { routingComponents} from './setup-routing.module';
import { CurrentSettingsComponent } from './current-settings/current-settings.component';
import { SynonimousComponent } from './synonimous/synonimous.component';
import { StopWordsComponent } from './stop-words/stop-words.component';
import { FineTuningComponent } from './fine-tuning/fine-tuning.component';
import { SynonymousModalComponent} from './synonimous/synonimous-modal/modal.component';
import { FilterOnWordPipe} from '../../pipes/filter.pipe';
import { BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService, ModalModule} from 'ngx-bootstrap';
import { EngageSearchModalComponent } from './fine-tuning/engage-search-modal/engage-search-modal.component';

@NgModule({
  imports: [
      SetupRoutingModule,
      NbRouteTabsetModule,
      MatChipsModule,
      CommonModule,
      NbCardModule,
      MatSliderModule,
      MatRadioModule,
      MatCheckboxModule,
      ModalModule.forRoot(),
      FormsModule
  ],
  declarations: [
      SetupComponent,
      routingComponents,
      CurrentSettingsComponent,
      SynonimousComponent,
      StopWordsComponent,
      FineTuningComponent,
      SynonymousModalComponent,
      EngageSearchModalComponent,
      FilterOnWordPipe
  ],
    providers: [BsModalRef, BsModalService],
    entryComponents: [SynonymousModalComponent, EngageSearchModalComponent]
})

export class SetupModule {}
