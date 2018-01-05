import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{ path: '', loadChildren: './home/home.module#HomeModule' },
{ path: 'boh', loadChildren: './my-component/my-component.module#MyComponentModule' },
{ path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponents = [NotFoundComponent];