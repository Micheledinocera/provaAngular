import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService ,NbSearchModule} from '@nebular/theme';
import { ThemeModule } from './theme/theme.module';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingModule } from 'ngx-loading';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule} from "@angular/common";
import { AngularSvgIconModule } from "angular-svg-icon";
import { TagInputModule } from 'ngx-chips';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';

import {MyToasterService} from "./service/toaster/my-toaster.service";
import {DataService} from "./service/data/data.service";
import {EventEmitterService} from "./service/event-emitter/event-emitter.service";

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        HeaderComponent,
        LoginComponent,
        SuperAdminComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        NbLayoutModule,
        NbSidebarModule,
        NbSearchModule,
        ToasterModule,
        LoadingModule,
        AngularSvgIconModule,
        BrowserAnimationsModule,
        TagInputModule,
        ThemeModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        AppRoutingModule
    ],
    providers: [NbSidebarService,MyToasterService,DataService,EventEmitterService,CookieService,LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
