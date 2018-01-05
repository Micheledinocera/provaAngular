import { NgModule } from '@angular/core';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import {MyComponentRoutingModule} from "./my-component-routing.module";
import {routingComponents} from "./my-component-routing.module";

@NgModule({
    declarations: [
        routingComponents
    ],
    imports: [
        MyComponentRoutingModule
    ]
})
export class MyComponentModule { }
