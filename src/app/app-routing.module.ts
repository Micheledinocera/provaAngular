import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from "./login/login.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'superAdmin', component: SuperAdminComponent },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'boh', loadChildren: './my-component/my-component.module#MyComponentModule' },
    { path: 'wizard', loadChildren: './wizard/wizard.module#WizardModule' },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponents = [NotFoundComponent,LoginComponent,SuperAdminComponent];