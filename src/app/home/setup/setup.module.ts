import { NgModule } from '@angular/core';
import { SetupRoutingModule} from './setup-routing.module';
import { NbRouteTabsetModule } from '@nebular/theme';
import { MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material';
import { MatCheckboxModule, MatRadioModule } from '@angular/material';
import { TreeviewModule } from 'ngx-treeview';
import { SharedModule } from '../../shared/shared.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
import { ContenteditableDirective } from 'ng-contenteditable';
import { SliderModule } from '../../ui/slider';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    SetupRoutingModule,
    NbRouteTabsetModule,
    MatSlideToggleModule,
    SliderModule,
    MatChipsModule,
    CommonModule,
    NbCardModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TreeviewModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule
  ],
  declarations: [
    SetupComponent,
    routingComponents,
    CurrentSettingsComponent,
    ContenteditableDirective,
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
