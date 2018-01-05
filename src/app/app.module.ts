import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { ThemeModule } from './theme/theme.module';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        NbLayoutModule,
        NbSidebarModule,
        BrowserAnimationsModule,
        ThemeModule.forRoot(),
        NbThemeModule.forRoot({ name: 'default' }),
        AppRoutingModule
    ],
    providers: [NbSidebarService],
    bootstrap: [AppComponent]
})
export class AppModule { }
