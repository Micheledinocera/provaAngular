import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbSearchModule} from '@nebular/theme';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { ToasterModule } from 'angular2-toaster';
import { CountUpModule } from 'countup.js-angular2';

import { LoadingModule } from 'ngx-loading';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule} from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TagInputModule } from 'ngx-chips';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { APP_BASE_HREF } from '@angular/common';

import {MyToasterService} from './service/toaster/my-toaster.service';
import {DataService} from './service/data/data.service';
import {EventEmitterService} from './service/event-emitter/event-emitter.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableViewComponent } from './home/table-view/table-view.component';
import { RandomComponent } from './random/random.component';
// import { PieChartComponent } from './home/analitycs/pie-chart/pie-chart.component';

@NgModule({
    declarations: [
      AppComponent,
      routingComponents,
      HeaderComponent,
      LoginComponent,
      SuperAdminComponent,
      RandomComponent
    ],
    imports: [
      HttpClientModule,
      CommonModule,
      NbLayoutModule,
      NbSidebarModule,
      NbSearchModule,
      LoadingBarRouterModule,
      LoadingBarHttpClientModule,
      BrowserAnimationsModule,
      CountUpModule,
      ToasterModule,
      LoadingModule,
      SharedModule,
      AngularSvgIconModule,
      TagInputModule,
      ThemeModule.forRoot(),
      NbThemeModule.forRoot({ name: 'default' }),
      AppRoutingModule
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      NbSidebarService, MyToasterService, DataService, EventEmitterService, CookieService, LoginComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
