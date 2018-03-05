import { NgModule } from '@angular/core';
import { StartRoutingModule } from './start-routing.module';
import { NbRouteTabsetModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { TreeviewModule } from 'ngx-treeview';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalModule } from 'ngx-bootstrap';
import { OrderModule } from 'ngx-order-pipe';
import { MatCheckboxModule, MatRadioModule} from '@angular/material';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SharedModule } from '../../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { CmsComponent } from './cms/cms.component';
import { WebsiteComponent } from './website/website.component';
import { FieldsComponent } from './fields/fields.component';
import { BackResultsComponent } from './back-results/back-results.component';
import { StartComponent } from './start.component';
import { ModalComponent } from './fields/modal/modal.component';
import { BackResultModalComponent } from './back-results/modal/modal.component';
import { FinishComponent } from './finish/finish.component';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap';

@NgModule({
  imports: [
    StartRoutingModule,
    NbRouteTabsetModule,
    NbCardModule,
    MatSlideToggleModule,
    CommonModule,
    FormsModule,
    AngularSvgIconModule,
    OrderModule,
    SharedModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TreeviewModule.forRoot()
  ],
  declarations: [
    CmsComponent,
    WebsiteComponent,
    FieldsComponent,
    BackResultsComponent,
    StartComponent,
    ModalComponent,
    BackResultModalComponent,
    FinishComponent],
  providers: [BsModalRef, BsModalService],
  entryComponents: [ModalComponent, BackResultModalComponent]
})
export class StartModule { }
